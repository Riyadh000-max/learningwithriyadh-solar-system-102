/**
 * PlanetFactory - Creates planet meshes, textures, glow effects, and orbit rings.
 * Bug #1 fix: variable shadowing resolved by module isolation.
 */

const planetData = [
    { name: "Mercury", size: 0.8, dist: 10, speed: 0.02, color: 0xaaaaaa },
    { name: "Venus", size: 1.2, dist: 15, speed: 0.015, color: 0xe3bb76 },
    { name: "Earth", size: 1.3, dist: 20, speed: 0.01, color: 0x2233ff },
    { name: "Mars", size: 1.1, dist: 25, speed: 0.008, color: 0xff4422 },
    { name: "Jupiter", size: 3.5, dist: 35, speed: 0.005, color: 0xd39c7e },
    { name: "Saturn", size: 3.0, dist: 45, speed: 0.003, color: 0xc5ab6e },
    { name: "Uranus", size: 2.2, dist: 55, speed: 0.002, color: 0xbbeeff },
    { name: "Neptune", size: 2.1, dist: 65, speed: 0.001, color: 0x6081ff },
];

function createPlanetTexture(color, number, renderer) {
    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = 512;
    textureCanvas.height = 512;
    const ctx = textureCanvas.getContext('2d');

    // Base Color
    const hexColor = `#${color.toString(16).padStart(6, '0')}`;
    ctx.fillStyle = hexColor;
    ctx.fillRect(0, 0, 512, 512);

    // "Carved" Number Effect
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;

    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.font = 'bold 240px Orbitron, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(number, 256, 256);

    // Shading for 3D feel
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 4;
    ctx.strokeText(number, 256, 256);

    const texture = new THREE.CanvasTexture(textureCanvas);
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return texture;
}

export function createPlanets(scene, renderer) {
    const planetMeshes = [];

    planetData.forEach((data, index) => {
        const group = new THREE.Group();

        // Orbit Ring
        const orbitGeom = new THREE.RingGeometry(data.dist - 0.1, data.dist + 0.1, 64);
        const orbitMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.1,
            side: THREE.DoubleSide
        });
        const orbit = new THREE.Mesh(orbitGeom, orbitMat);
        orbit.rotation.x = Math.PI / 2;
        scene.add(orbit);

        // Planet Mesh
        const geom = new THREE.SphereGeometry(data.size, 32, 32);
        const texture = createPlanetTexture(data.color, index + 1, renderer);
        const mat = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.7,
            metalness: 0.2
        });
        const mesh = new THREE.Mesh(geom, mat);

        // Halo/Glow (Mastered state)
        const glowGeom = new THREE.SphereGeometry(data.size * 1.2, 32, 32);
        const glowMat = new THREE.MeshBasicMaterial({
            color: data.color,
            transparent: true,
            opacity: 0,
            side: THREE.BackSide
        });
        const glow = new THREE.Mesh(glowGeom, glowMat);
        mesh.add(glow);

        group.add(mesh);
        scene.add(group);

        planetMeshes.push({
            group,
            mesh,
            glow,
            dist: data.dist,
            speed: data.speed,
            angle: Math.random() * Math.PI * 2,
            unitIndex: index,
        });
    });

    return planetMeshes;
}
