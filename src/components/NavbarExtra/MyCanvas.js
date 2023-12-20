import React, { useEffect } from 'react';
import * as THREE from 'three';

const MyCanvas = () => {
  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Attach the renderer to the DOM element
    const canvasContainer = document.getElementById('canvas-container');
    canvasContainer.appendChild(renderer.domElement);

    // Create a cube (example)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube (example)
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    };

    // Start animation
    animate();

    // Clean up on component unmount
    return () => {
      canvasContainer.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="canvas-container" className="top-0 left-0 z-20 w-full h-96 md:h-full md:fixed" />;
};

export default MyCanvas;
