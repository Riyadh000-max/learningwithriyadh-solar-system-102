/**
 * SceneManager - Three.js scene, renderer, camera, lights, sun, and animation loop.
 */
export class SceneManager {
    constructor() {
        this.canvas = document.querySelector('#bg-canvas');
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 30, 60);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const sunLight = new THREE.PointLight(0xffffff, 2, 300);
        sunLight.position.set(0, 0, 0);
        this.scene.add(sunLight);

        // Sun
        const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffdd00 });
        this.sun = new THREE.Mesh(sunGeometry, sunMaterial);
        this.scene.add(this.sun);

        // Animation callbacks
        this._callbacks = [];

        // Responsive
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    onAnimate(callback) {
        this._callbacks.push(callback);
    }

    startLoop() {
        const animate = () => {
            requestAnimationFrame(animate);
            this._callbacks.forEach(cb => cb());
            this.sun.rotation.y += 0.005;
            this.renderer.render(this.scene, this.camera);
        };
        animate();
    }
}
