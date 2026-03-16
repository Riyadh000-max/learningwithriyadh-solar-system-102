/**
 * PanelManager - Planet info panel open/close, tab buttons, mobile nav.
 * Bug #7 fix: no inline onclick handlers, uses event delegation.
 */
export class PanelManager {
    constructor(eventBus, units) {
        this.eventBus = eventBus;
        this.units = units;
        this.panel = document.getElementById('planet-info');
        this.titleEl = document.getElementById('planet-title');
        this.subtitleEl = document.getElementById('planet-subtitle');
        this.mobileControls = document.querySelector('.mobile-controls');
        this._currentIndex = null;

        this._setupCloseButton();
        this._setupTabs();
        this._setupMobileNav();
        this._listenEvents();
    }

    _listenEvents() {
        this.eventBus.on('planet:select', ({ planetIndex }) => {
            // Prevent re-selecting the same planet
            if (this._currentIndex === planetIndex) return;
            this._currentIndex = planetIndex;
            this._openPanel(planetIndex);
        });

        this.eventBus.on('planet:deselect', () => {
            this._closePanel();
        });
    }

    _openPanel(planetIndex) {
        const unit = this.units[planetIndex];
        this.titleEl.innerText = unit.name;
        this.subtitleEl.innerText = unit.focus;
        this.panel.style.display = 'flex';
        setTimeout(() => this.panel.classList.add('active'), 10);
        this.mobileControls.classList.add('visible');

        // Reset to grammar tab
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        const grammarTab = document.querySelector('[data-tab="grammar"]');
        if (grammarTab) {
            grammarTab.classList.add('active');
            grammarTab.setAttribute('aria-selected', 'true');
        }

        this.eventBus.emit('tab:change', { tabId: 'grammar' });
    }

    _closePanel() {
        this.panel.classList.remove('active');
        setTimeout(() => this.panel.style.display = 'none', 300);
        this.mobileControls.classList.remove('visible');
        this._currentIndex = null;
        this.eventBus.emit('camera:return', {});
    }

    _setupCloseButton() {
        const closeBtn = this.panel.querySelector('.close-btn');
        closeBtn.setAttribute('aria-label', 'Close panel');
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.eventBus.emit('planet:deselect', {});
        });
    }

    _setupTabs() {
        const tabsContainer = this.panel.querySelector('.tabs');
        tabsContainer.setAttribute('role', 'tablist');

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', btn.classList.contains('active') ? 'true' : 'false');
        });

        tabsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.tab-btn');
            if (!btn) return;

            document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            this.eventBus.emit('tab:change', { tabId: btn.dataset.tab });
        });
    }

    _setupMobileNav() {
        this.mobileControls.addEventListener('click', (e) => {
            const btn = e.target.closest('.nav-btn');
            if (!btn) return;

            const direction = parseInt(btn.dataset.direction, 10);
            if (isNaN(direction)) return;

            let nextIndex = (this._currentIndex || 0) + direction;
            if (nextIndex < 0) nextIndex = this.units.length - 1;
            if (nextIndex >= this.units.length) nextIndex = 0;

            this.eventBus.emit('planet:select', { planetIndex: nextIndex });
        });
    }
}
