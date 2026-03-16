/**
 * main.js - Entry point. Imports all modules and wires them together.
 */
import { eventBus } from './core/EventBus.js';
import { GameState } from './core/GameState.js';
import { units } from './data/units.js';
import { SceneManager } from './scene/SceneManager.js';
import { createPlanets } from './scene/PlanetFactory.js';
import { createStarField } from './scene/StarField.js';
import { PanelManager } from './ui/PanelManager.js';
import { TabRenderer } from './ui/TabRenderer.js';
import { HUD } from './ui/HUD.js';
import { ToastManager } from './ui/Toast.js';
import { InputHandler } from './input/InputHandler.js';
import { CameraController } from './input/CameraController.js';
import { SpeechManager } from './audio/SpeechManager.js';

// --- Initialize Scene ---
const sceneManager = new SceneManager();
const { scene, camera, renderer } = sceneManager;

// --- Create 3D Objects ---
const planetMeshes = createPlanets(scene, renderer);
const starField = createStarField(scene);

// --- Initialize State ---
const gameState = new GameState(eventBus, units);

// --- Initialize Camera Controller ---
const cameraController = new CameraController(
    eventBus, camera, renderer.domElement, planetMeshes
);

// --- Initialize Input ---
const inputHandler = new InputHandler(
    eventBus, camera, planetMeshes, cameraController
);

// --- Initialize UI ---
const panelManager = new PanelManager(eventBus, units);
const tabRenderer = new TabRenderer(eventBus, units, gameState);
const hud = new HUD(eventBus, gameState);
const toastManager = new ToastManager(eventBus);

// --- Initialize Audio ---
const speechManager = new SpeechManager(eventBus);

// --- Restore mastery glow for previously mastered planets ---
planetMeshes.forEach((p, index) => {
    if (gameState.isUnitMastered(index)) {
        p.glow.material.opacity = 0.5;
    }
});

// --- Listen for new mastery events ---
eventBus.on('unit:mastered', ({ unitIndex }) => {
    const planet = planetMeshes[unitIndex];
    planet.glow.material.opacity = 0.5;

    // Celebration confetti
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#818cf8', '#c084fc', '#f472b6']
        });
    }
});

// --- Animation Loop ---
// Cache sin calculation per frame for performance
let glowSin = 0;

sceneManager.onAnimate(() => {
    glowSin = Math.sin(Date.now() * 0.005);

    planetMeshes.forEach((p, index) => {
        // Bug #8 fix: only pause the selected planet's orbit
        const isSelected = index === gameState.selectedPlanetIndex;
        if (!isSelected) {
            p.angle += p.speed * 0.5;
            p.group.position.x = Math.cos(p.angle) * p.dist;
            p.group.position.z = Math.sin(p.angle) * p.dist;
        }

        // Self rotation
        p.mesh.rotation.y += 0.01;

        // Mastery glow pulsation
        if (gameState.isUnitMastered(index)) {
            p.glow.scale.setScalar(1.2 + glowSin * 0.1);
            p.glow.material.opacity = 0.3 + glowSin * 0.2;
        }
    });

    starField.rotation.y += 0.0001;
    cameraController.update();
});

// --- Start ---
sceneManager.startLoop();
