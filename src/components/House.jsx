import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const House = () => {
  const containerRef = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth/2, window.innerHeight);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.appendChild(renderer.domElement);

    // Set a white background
    renderer.setClearColor(0xffffff);

    // Load the 3D model
    // instantiate a loader
    const loader = new OBJLoader();

    // load a resource
    loader.load(
        // resource URL
        'src/assets/models/house.obj',
        // called when resource is loaded
        function ( object ) {

            scene.add( object );

        },
        // called when loading is in progresses
        function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error ) {

            console.log( 'An error happened' );

        }
    );

    // Position the camera
    camera.position.y = 10;

    // Create orbit controls for rotating the scene
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    // Disable zoom
    controls.enableZoom = false;

    // Restrict rotation to the Y-axis
    controls.minPolarAngle = Math.PI / 2; // Y-axis rotation
    controls.maxPolarAngle = Math.PI / 2;

    const animate = () => {
      requestAnimationFrame(animate);

      // Update controls
      controls.update();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up when the component unmounts
      controls.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%' }}
    />
  );
};

export default House;
