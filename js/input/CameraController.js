/**
 * CameraController - Smooth camera transitions and OrbitControls.
 * Bug #5 fix: controls disabled during return transition.
 */

const State = {
    IDLE: 'idle',
    MOVING_TO_PLANET: 'moving_to_planet',
    RETURNING_HOME: 'returning_home'
};

const HOME_POSITION = new THREE.Vector3(0, 30, 60);
const HOME_TARGET = new THREE.Vector3(0, 0, 0);
const LERP_SPEED = 0.08;
const ARRIVAL_THRESHOLD = 0.1;

export class CameraController {
    constructor(eventBus, camera, domElement, planetMeshes) {
        this.eventBus = eventBus;
        this.camera = camera;
        this.planetMeshes = planetMeshes;
        this.state = State.IDLE;

        this.controls = new THREE.OrbitControls(camera, domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;

        this._tempVector = new THREE.Vector3();

        this._listen();
    }

    _listen() {
        this.eventBus.on('planet:select', ({ planetIndex }) => {
            this._selectedIndex = planetIndex;
            this.controls.enabled = false;
            this.state = State.MOVING_TO_PLANET;
        });

        this.eventBus.on('camera:return', () => {
            this._selectedIndex = null;
            this.controls.enabled = false; // Bug #5 fix: disable during return
            this.state = State.RETURNING_HOME;
        });
    }

    get isTransitioning() {
        return this.state !== State.IDLE;
    }

    update() {
        if (this.state === State.MOVING_TO_PLANET && this._selectedIndex !== null) {
            const planet = this.planetMeshes[this._selectedIndex];
            planet.mesh.getWorldPosition(this._tempVector);

            const targetPos = this._tempVector.clone().add(new THREE.Vector3(0, 5, 8));
            this.camera.position.lerp(targetPos, LERP_SPEED);
            this.controls.target.lerp(this._tempVector, LERP_SPEED);

            if (this.camera.position.distanceTo(targetPos) < ARRIVAL_THRESHOLD) {
                this.state = State.IDLE;
                this.controls.enabled = true;
                this.eventBus.emit('camera:arrived', {});
            }
        } else if (this.state === State.RETURNING_HOME) {
            this.camera.position.lerp(HOME_POSITION, LERP_SPEED);
            this.controls.target.lerp(HOME_TARGET, LERP_SPEED);

            if (this.camera.position.distanceTo(HOME_POSITION) < ARRIVAL_THRESHOLD) {
                this.state = State.IDLE;
                this.controls.enabled = true; // Re-enable only when arrived
            }
        }

        this.controls.update();
    }
}
