/* ==========================================================================
   PARALLAX — 3D galaxy hero (Three.js particle spiral)
   ========================================================================== */
(function () {
  const canvas = document.getElementById('galaxyCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 2.4, 5.4);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // ---- Galaxy particle spiral -------------------------------------------
  const PARAMS = {
    count: 14000,
    radius: 4.2,
    branches: 4,
    spin: 1.4,
    randomness: 0.45,
    randomnessPower: 3,
    insideColor: '#F2C879',
    outsideColor: '#7C5CFF'
  };

  const positions = new Float32Array(PARAMS.count * 3);
  const colors = new Float32Array(PARAMS.count * 3);
  const scales = new Float32Array(PARAMS.count);

  const colorInside = new THREE.Color(PARAMS.insideColor);
  const colorOutside = new THREE.Color(PARAMS.outsideColor);

  for (let i = 0; i < PARAMS.count; i++) {
    const i3 = i * 3;
    const r = Math.pow(Math.random(), 1.4) * PARAMS.radius;
    const branchAngle = ((i % PARAMS.branches) / PARAMS.branches) * Math.PI * 2;
    const spinAngle = r * PARAMS.spin;

    const randX = Math.pow(Math.random(), PARAMS.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * PARAMS.randomness * r;
    const randY = Math.pow(Math.random(), PARAMS.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * PARAMS.randomness * 0.3;
    const randZ = Math.pow(Math.random(), PARAMS.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * PARAMS.randomness * r;

    positions[i3]     = Math.cos(branchAngle + spinAngle) * r + randX;
    positions[i3 + 1] = randY;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randZ;

    const mixedColor = colorInside.clone().lerp(colorOutside, r / PARAMS.radius);
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;

    scales[i] = Math.random();
  }

  const galaxyGeometry = new THREE.BufferGeometry();
  galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const galaxyMaterial = new THREE.PointsMaterial({
    size: 0.028,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    transparent: true,
    opacity: 0.9
  });

  const galaxyPoints = new THREE.Points(galaxyGeometry, galaxyMaterial);
  galaxyPoints.rotation.x = 0.5;
  scene.add(galaxyPoints);

  // ---- Distant background starfield --------------------------------------
  const starCount = 1200;
  const starPositions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i++) {
    starPositions[i] = (Math.random() - 0.5) * 40;
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  const starMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0xC7C3DB,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true
  });
  const starField = new THREE.Points(starGeometry, starMaterial);
  scene.add(starField);

  // ---- Interaction: mouse parallax + scroll pullback ---------------------
  let mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  let scrollProgress = 0;
  window.addEventListener('scroll', () => {
    const heroHeight = window.innerHeight;
    scrollProgress = Math.min(window.scrollY / heroHeight, 1);
  }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    if (!prefersReducedMotion) {
      galaxyPoints.rotation.y = elapsed * 0.05;
      starField.rotation.y = elapsed * 0.008;
    }

    // parallax tilt toward cursor
    galaxyPoints.rotation.x = 0.5 + mouseY * 0.15;
    galaxyPoints.rotation.z = mouseX * 0.05;

    // scroll pulls camera back and up, galaxy recedes
    camera.position.y = 2.4 + scrollProgress * 3.2;
    camera.position.z = 5.4 + scrollProgress * 6;
    camera.lookAt(0, scrollProgress * 1.5, 0);

    renderer.render(scene, camera);
  }

  animate();
})();
