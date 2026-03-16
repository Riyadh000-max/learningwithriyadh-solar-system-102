/**
 * InputHandler - Mouse click, touch tap, and keyboard navigation.
 * Bug #9 fix: adds keyboard support (arrows, Enter, Escape).
 */
export class InputHandler {
    constructor(eventBus, camera, planetMeshes, cameraController) {
        this.eventBus = eventBus;
        this.camera = camera;
        this.planetMeshes = planetMeshes;
        this.cameraController = cameraController;
        this.isPanelOpen = false;

        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        // Touch tracking
        this._touchStartX = 0;
        this._touchStartY = 0;

        // Keyboard planet cycling
        this._highlightIndex = 0;

        this._setupMouse();
        this._setupTouch();
        this._setupKeyboard();
        this._listenEvents();
    }

    _listenEvents() {
        this.eventBus.on('planet:select', () => {
            this.isPanelOpen = true;
        });
        this.eventBus.on('planet:deselect', () => {
            this.isPanelOpen = false;
        });
    }

    _setupMouse() {
        window.addEventListener('click', (event) => {
            this._handleInteraction(event.clientX, event.clientY);
        });
    }

    _setupTouch() {
        window.addEventListener('touchstart', (event) => {
            this._touchStartX = event.touches[0].clientX;
            this._touchStartY = event.touches[0].clientY;
        }, { passive: false });

        window.addEventListener('touchend', (event) => {
            if (event.changedTouches.length > 0) {
                const endX = event.changedTouches[0].clientX;
                const endY = event.changedTouches[0].clientY;
                const dist = Math.sqrt(
                    Math.pow(endX - this._touchStartX, 2) +
                    Math.pow(endY - this._touchStartY, 2)
                );
                if (dist < 10) {
                    this._handleInteraction(endX, endY);
                }
            }
        }, { passive: false });
    }

    _setupKeyboard() {
        window.addEventListener('keydown', (event) => {
            // Don't intercept keyboard when typing in inputs
            if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;

            switch (event.key) {
                case 'ArrowRight':
                    event.preventDefault();
                    this._cyclePlanet(1);
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    this._cyclePlanet(-1);
                    break;
                case 'Enter':
                    event.preventDefault();
                    if (!this.isPanelOpen) {
                        this.eventBus.emit('planet:select', { planetIndex: this._highlightIndex });
                    }
                    break;
                case 'Escape':
                    if (this.isPanelOpen) {
                        event.preventDefault();
                        this.eventBus.emit('planet:deselect', {});
                    }
                    break;
            }
        });
    }

    _cyclePlanet(direction) {
        if (this.isPanelOpen) {
            // Navigate between planets while panel is open
            let nextIndex = this._highlightIndex + direction;
            if (nextIndex < 0) nextIndex = this.planetMeshes.length - 1;
            if (nextIndex >= this.planetMeshes.length) nextIndex = 0;
            this._highlightIndex = nextIndex;
            this.eventBus.emit('planet:select', { planetIndex: nextIndex });
        } else {
            // Cycle highlight
            this._highlightIndex += direction;
            if (this._highlightIndex < 0) this._highlightIndex = this.planetMeshes.length - 1;
            if (this._highlightIndex >= this.planetMeshes.length) this._highlightIndex = 0;
        }
    }

    _handleInteraction(clientX, clientY) {
        if (this.cameraController.isTransitioning) return;

        this.mouse.x = (clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(clientY / window.innerHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(
            this.planetMeshes.map(p => p.mesh)
        );

        if (intersects.length > 0) {
            const hit = intersects[0].object;
            const planet = this.planetMeshes.find(p => p.mesh === hit);
            if (planet) {
                this._highlightIndex = planet.unitIndex;
                this.eventBus.emit('planet:select', { planetIndex: planet.unitIndex });
            }
        }
    }
}
