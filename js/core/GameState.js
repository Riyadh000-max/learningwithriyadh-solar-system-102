/**
 * GameState - Centralized state management with localStorage persistence.
 * Fixes Bug #3 (mastery logic) and Bug #4 (progress persistence).
 */
const STORAGE_KEY = 'solarGameState';

export class GameState {
    constructor(eventBus, units) {
        this.eventBus = eventBus;
        this.units = units;
        this.selectedPlanetIndex = null;
        this.totalPoints = 0;

        // Per-unit state: viewedTabs, practiceAnswers, mastered
        this.unitStates = units.map(() => ({
            viewedTabs: new Set(),
            practiceAnswers: {},
            mastered: false
        }));

        this._load();
        this._listen();
    }

    _listen() {
        this.eventBus.on('planet:select', ({ planetIndex }) => {
            this.selectedPlanetIndex = planetIndex;
        });

        this.eventBus.on('planet:deselect', () => {
            this.selectedPlanetIndex = null;
        });

        this.eventBus.on('tab:change', ({ tabId }) => {
            if (this.selectedPlanetIndex === null) return;
            // Mark non-practice tabs as viewed (practice requires answering questions)
            if (tabId !== 'practice') {
                this.unitStates[this.selectedPlanetIndex].viewedTabs.add(tabId);
                this._save();
            } else {
                // Also mark practice as viewed when opened
                this.unitStates[this.selectedPlanetIndex].viewedTabs.add('practice');
                this._save();
            }
        });

        this.eventBus.on('answer:submit', ({ unitIndex, questionIndex, optionIndex, buttonEl }) => {
            this._handleAnswer(unitIndex, questionIndex, optionIndex, buttonEl);
        });
    }

    _handleAnswer(unitIndex, questionIndex, optionIndex, buttonEl) {
        const unit = this.units[unitIndex];
        const question = unit.practice.questions[questionIndex];
        const state = this.unitStates[unitIndex];

        // Skip if already answered
        if (state.practiceAnswers[questionIndex] !== undefined) return;

        const isCorrect = optionIndex === question.answer;
        state.practiceAnswers[questionIndex] = isCorrect;

        if (isCorrect) {
            this.totalPoints += 10;
            this._save();

            this.eventBus.emit('answer:correct', {
                unitIndex,
                questionIndex,
                points: 10,
                buttonEl
            });

            this.eventBus.emit('points:update', { total: this.totalPoints });

            // Check mastery (Bug #3 fix):
            // All 3 content tabs viewed + all practice questions answered correctly
            this._checkMastery(unitIndex);
        } else {
            this._save();

            this.eventBus.emit('answer:wrong', {
                unitIndex,
                questionIndex,
                wrongEn: question.wrongEn,
                wrongAr: question.wrongAr,
                buttonEl
            });

            this.eventBus.emit('toast:show', {
                en: question.wrongEn,
                ar: question.wrongAr
            });
        }
    }

    _checkMastery(unitIndex) {
        const state = this.unitStates[unitIndex];
        const unit = this.units[unitIndex];

        if (state.mastered) return;

        // Check all content tabs viewed
        const requiredTabs = ['grammar', 'vocabulary', 'function'];
        const allTabsViewed = requiredTabs.every(t => state.viewedTabs.has(t));

        // Check all practice questions answered correctly
        const totalQuestions = unit.practice.questions.length;
        const allCorrect = Object.keys(state.practiceAnswers).length === totalQuestions
            && Object.values(state.practiceAnswers).every(v => v === true);

        if (allTabsViewed && allCorrect) {
            state.mastered = true;
            this._save();
            this.eventBus.emit('unit:mastered', { unitIndex });
        }
    }

    isUnitMastered(unitIndex) {
        return this.unitStates[unitIndex].mastered;
    }

    getAnswerForQuestion(unitIndex, questionIndex) {
        return this.unitStates[unitIndex].practiceAnswers[questionIndex];
    }

    getUnitState(unitIndex) {
        return this.unitStates[unitIndex];
    }

    _save() {
        try {
            const data = {
                totalPoints: this.totalPoints,
                units: this.unitStates.map(s => ({
                    viewedTabs: [...s.viewedTabs],
                    practiceAnswers: { ...s.practiceAnswers },
                    mastered: s.mastered
                }))
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            // localStorage might be unavailable
        }
    }

    _load() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return;

            const data = JSON.parse(raw);
            this.totalPoints = data.totalPoints || 0;

            if (data.units && data.units.length === this.units.length) {
                data.units.forEach((saved, i) => {
                    this.unitStates[i].viewedTabs = new Set(saved.viewedTabs || []);
                    this.unitStates[i].practiceAnswers = saved.practiceAnswers || {};
                    this.unitStates[i].mastered = saved.mastered || false;
                });
            }
        } catch (e) {
            // Corrupted data, start fresh
        }
    }
}
