/**
 * TabRenderer - Renders Grammar/Vocab/Function/Practice content.
 * Bug #2 fix: correct CSS selector '.practice-card'.
 * Bug #7 fix: event delegation instead of inline onclick.
 * Bug #10 fix: no string escaping in onclick attributes.
 */

function escapeAttr(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

export class TabRenderer {
    constructor(eventBus, units, gameState) {
        this.eventBus = eventBus;
        this.units = units;
        this.gameState = gameState;
        this.contentEl = document.getElementById('tab-content');
        this._currentUnitIndex = null;

        this._setupDelegation();
        this._listenEvents();
    }

    _listenEvents() {
        this.eventBus.on('planet:select', ({ planetIndex }) => {
            this._currentUnitIndex = planetIndex;
        });

        this.eventBus.on('tab:change', ({ tabId }) => {
            if (this._currentUnitIndex === null) return;
            this._renderTab(tabId, this._currentUnitIndex);
        });

        this.eventBus.on('answer:correct', ({ questionIndex, buttonEl }) => {
            if (!buttonEl) return;
            buttonEl.style.background = '#22c55e';
            buttonEl.style.borderColor = '#22c55e';
            buttonEl.style.color = '#fff';
            buttonEl.style.transform = 'scale(0.98)';
            buttonEl.innerText = '\u2713 Correct!';

            // Disable all options for this question (Bug #2 fix)
            const card = buttonEl.closest('.practice-card');
            if (card) {
                card.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
            }

            // Confetti
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 30,
                    spread: 40,
                    origin: { y: 0.6 },
                    colors: ['#818cf8', '#c084fc', '#22c55e']
                });
            }
        });

        this.eventBus.on('answer:wrong', ({ buttonEl }) => {
            if (!buttonEl) return;
            buttonEl.style.background = '#ef4444';
            buttonEl.style.borderColor = '#ef4444';
            buttonEl.style.color = '#fff';

            // Disable all options for this question (Bug #2 fix)
            const card = buttonEl.closest('.practice-card');
            if (card) {
                card.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
            }
        });

        this.eventBus.on('planet:deselect', () => {
            this._currentUnitIndex = null;
        });
    }

    _setupDelegation() {
        this.contentEl.addEventListener('click', (e) => {
            // Answer button clicks
            const optionBtn = e.target.closest('[data-action="answer"]');
            if (optionBtn) {
                const qIdx = parseInt(optionBtn.dataset.questionIdx, 10);
                const oIdx = parseInt(optionBtn.dataset.optionIdx, 10);
                this.eventBus.emit('answer:submit', {
                    unitIndex: this._currentUnitIndex,
                    questionIndex: qIdx,
                    optionIndex: oIdx,
                    buttonEl: optionBtn
                });
                return;
            }

            // Speaker button clicks
            const speakerBtn = e.target.closest('[data-action="speak"]');
            if (speakerBtn) {
                const text = speakerBtn.dataset.text;
                this.eventBus.emit('speech:play', { text, element: speakerBtn });
                return;
            }

            // Dialogue bubble clicks
            const dialogueBubble = e.target.closest('[data-action="speak-dialogue"]');
            if (dialogueBubble) {
                const text = dialogueBubble.dataset.text;
                this.eventBus.emit('speech:play', { text, element: dialogueBubble });
                return;
            }

            // "Go to Practice" button
            const practiceBtn = e.target.closest('[data-action="go-practice"]');
            if (practiceBtn) {
                const practiceTab = document.querySelector('[data-tab="practice"]');
                if (practiceTab) practiceTab.click();
                return;
            }
        });
    }

    _renderTab(tabId, unitIndex) {
        const unit = this.units[unitIndex];
        const content = this.contentEl;

        switch (tabId) {
            case 'grammar':
                content.innerHTML = this._renderGrammar(unit);
                break;
            case 'vocabulary':
                content.innerHTML = this._renderVocabulary(unit);
                break;
            case 'function':
                content.innerHTML = this._renderFunction(unit);
                break;
            case 'practice':
                content.innerHTML = this._renderPractice(unit, unitIndex);
                break;
        }
    }

    _renderGrammar(unit) {
        return `
            <div class="grammar-note-card">
                <div style="font-weight:700; color:#818cf8; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                    <span style="font-size:1.2em;">&#128104;&#8205;&#127979;</span> Teacher's Note / \u0645\u0644\u0627\u062d\u0638\u0629 \u0627\u0644\u0645\u0639\u0644\u0645
                </div>
                <div style="line-height:1.6; color:#e2e8f0; margin-bottom:12px;">${unit.grammar.noteEn}</div>
                <div style="line-height:1.6; color:#94a3b8; font-style:italic;" dir="rtl">${unit.grammar.noteAr}</div>
            </div>

            <div class="grammar-matrix">
                <div class="matrix-cell">
                    <div class="matrix-header">Form / \u0627\u0644\u0635\u064a\u063a\u0629</div>
                    ${unit.grammar.form.map(f => `<div style="margin-bottom:8px; color:#e2e8f0;">${f}</div>`).join('')}
                </div>
                <div class="matrix-cell">
                    <div class="matrix-header">Example / \u0645\u062b\u0627\u0644</div>
                    ${unit.grammar.examples.map(e => `<div style="margin-bottom:8px; color:#818cf8;">\u2022 ${e}</div>`).join('')}
                </div>
                <div class="matrix-cell">
                    <div class="matrix-header">Logic / \u0627\u0644\u0645\u0646\u0637\u0642</div>
                    ${unit.grammar.logic.map(l => `<div style="margin-bottom:8px; color:#94a3b8;">- ${l}</div>`).join('')}
                </div>
            </div>

            <div class="grammar-note-card" style="margin-top:32px; border:1px dashed var(--primary); background:rgba(129, 140, 248, 0.05);">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <div style="font-weight:700; color:#818cf8;">READY TO PRACTICE?</div>
                        <div style="color:#94a3b8; font-size:0.9em;">Head over to the Practice tab to test your knowledge!</div>
                    </div>
                    <button class="option-btn" style="width:auto; padding:8px 20px;" data-action="go-practice">Go to Practice</button>
                </div>
            </div>
        `;
    }

    _renderVocabulary(unit) {
        return `
            <div class="vocab-grid">
                ${unit.vocabulary.list.map(v => `
                    <div class="vocab-card">
                        <div style="display:flex; justify-content:space-between; align-items:start;">
                            <div>
                                <div style="font-size:1.2em; font-weight:700; color:#fff; margin-bottom:4px;">${v.en}</div>
                                <div style="color:var(--primary); font-size:1em; font-weight:500;">${v.ar}</div>
                            </div>
                            <button class="speaker-btn" data-action="speak" data-text="${escapeAttr(v.en)}">
                                <span>&#128266;</span>
                            </button>
                        </div>
                        <div class="context-sentence">${v.context}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    _renderFunction(unit) {
        const fn = unit.function;
        return `
            <div class="function-context">
                <span>Target Context: ${fn.context}</span>
            </div>

            <div class="function-columns">
                <div class="function-col" style="color:#e2e8f0; font-size:1.05em;">
                    <div style="font-weight:700; font-size:0.75em; opacity:0.6; margin-bottom:10px; text-transform:uppercase;">English Explanation</div>
                    ${fn.howEn}
                </div>
                <div class="function-col" style="color:#94a3b8; font-size:1.05em;" dir="rtl">
                    <div style="font-weight:700; font-size:0.75em; opacity:0.6; margin-bottom:10px; text-transform:uppercase;">\u0643\u064a\u0641\u064a\u0629 \u0627\u0644\u0639\u0645\u0644</div>
                    ${fn.howAr}
                </div>
            </div>

            <div class="realtalk-section">
                <div class="realtalk-header">
                    <span>REAL TALK PHRASES</span>
                    <span>\u0627\u0636\u063a\u0637 \u0644\u0644\u0627\u0633\u062a\u0645\u0627\u0639 / Click to listen</span>
                </div>
                <div class="realtalk-grid">
                    ${fn.realTalk.map(p => `
                        <button class="phrase-btn" data-action="speak" data-text="${escapeAttr(p)}">
                            <span>&#128266;</span> ${p}
                        </button>
                    `).join('')}
                </div>
            </div>

            <div class="dialogue-section">
                <div class="realtalk-header">
                    <span>REAL CONTEXT DIALOGUE</span>
                    <span>\u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0627\u0644\u0641\u0642\u0627\u0639\u0629 \u0644\u0644\u0627\u0633\u062a\u0645\u0627\u0639 / Click bubble to listen</span>
                </div>
                ${fn.dialogue ? fn.dialogue.map(d => `
                    <div class="dialogue-bubble" data-action="speak-dialogue" data-text="${escapeAttr(d.text)}">
                        <div class="dialogue-speaker">${d.speaker}</div>
                        <div class="dialogue-text"><span>&#128266;</span> ${d.text}</div>
                        <div class="dialogue-ar" dir="rtl">${d.ar}</div>
                    </div>
                `).join('') : ''}
            </div>
        `;
    }

    _renderPractice(unit, unitIndex) {
        const state = this.gameState.getUnitState(unitIndex);
        const allCorrect = unit.practice.questions.length > 0
            && Object.keys(state.practiceAnswers).length === unit.practice.questions.length
            && Object.values(state.practiceAnswers).every(v => v === true);

        return `
            <div style="margin-top:10px;">
                <div style="font-weight:700; color:#818cf8; margin-bottom:20px; font-family:'Orbitron', sans-serif; display:flex; justify-content:space-between; align-items:center;">
                    <span>MISSION PRACTICE</span>
                    <span dir="rtl">\u0645\u0647\u0627\u0645 \u0627\u0644\u062a\u062f\u0631\u064a\u0628</span>
                </div>
                <div class="practice-container">
                    ${unit.practice.questions.map((q, qIdx) => {
                        const prevAnswer = state.practiceAnswers[qIdx];
                        const isAnswered = prevAnswer !== undefined;

                        return `
                            <div class="practice-card">
                                <div class="question-text">${q.q}</div>
                                <div class="options-grid">
                                    ${q.options.map((opt, oIdx) => {
                                        let extraClass = '';
                                        let extraStyle = '';
                                        let disabled = '';
                                        let text = opt;

                                        if (isAnswered) {
                                            disabled = 'disabled';
                                            if (oIdx === q.answer && prevAnswer === true) {
                                                extraStyle = 'background:#22c55e; border-color:#22c55e; color:#fff;';
                                                text = '\u2713 Correct!';
                                            } else if (prevAnswer === false && oIdx !== q.answer) {
                                                // Show which option was wrongly clicked
                                                // We don't track which wrong option was picked, so just disable
                                            }
                                        }

                                        return `<button class="option-btn ${extraClass}" style="${extraStyle}" ${disabled}
                                            data-action="answer" data-question-idx="${qIdx}" data-option-idx="${oIdx}">${text}</button>`;
                                    }).join('')}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                ${allCorrect ? `
                    <div class="mastery-banner">
                        <h3>ALL QUESTIONS CORRECT!</h3>
                        <div style="color:#94a3b8;">Visit all other tabs to master this planet.</div>
                    </div>
                ` : ''}
            </div>
        `;
    }
}
