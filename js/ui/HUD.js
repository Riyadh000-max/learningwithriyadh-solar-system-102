/**
 * HUD - Points display and mission status.
 */
export class HUD {
    constructor(eventBus, gameState) {
        this.pointsEl = document.getElementById('total-points');
        this.statusEl = document.getElementById('planet-status');

        // Initialize with saved state
        this.pointsEl.innerText = gameState.totalPoints;

        eventBus.on('points:update', ({ total }) => {
            this.pointsEl.innerText = total;
        });

        eventBus.on('unit:mastered', ({ unitIndex }) => {
            this.statusEl.innerText = `Planet ${unitIndex + 1} mastered!`;
        });

        eventBus.on('planet:select', ({ planetIndex }) => {
            this.statusEl.innerText = `Exploring Planet ${planetIndex + 1}`;
        });

        eventBus.on('planet:deselect', () => {
            this.statusEl.innerText = 'Click a planet to start learning';
        });
    }
}
