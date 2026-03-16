/**
 * StarField - Background star particles.
 */
export function createStarField(scene) {
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 5000;
    const posArray = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 400;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const starsMaterial = new THREE.PointsMaterial({ size: 0.1, color: 0xffffff });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    return starField;
}
