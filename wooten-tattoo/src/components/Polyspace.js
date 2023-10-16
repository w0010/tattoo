import React, { useEffect } from 'react';
import * as THREE from 'three';

const Polyspace = () => {
    useEffect(() => {
        const mood = 0x1F2123;
        const ZOOM = 350;
        const ZOOMER = 0.05;
        const easeFactor = 0.05;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('hsl(0, 0%, 85%)');
        scene.fog = new THREE.Fog('hsl(0, 0%, 55%)', 1, 2400);

        const camera = new THREE.PerspectiveCamera(150, window.innerWidth / window.innerHeight, 0.01, 10000);
        camera.position.z = ZOOM;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        document.getElementById('polyspace').appendChild(renderer.domElement);

        const spotLight = new THREE.SpotLight(mood);
        spotLight.position.set(0, -10000, 10000);
        scene.add(spotLight);

        const geometry = new THREE.TetrahedronGeometry(4800);
        const material = new THREE.MeshPhongMaterial({
            color: mood,
            flatShading: true,
            transparent: true,
            opacity: 0.1,
            shininess: 20,
            polygonOffset: true,
            polygonOffsetFactor: 300,
            polygonOffsetUnits: 1,
            side: THREE.BackSide
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        mesh.add(new THREE.LineSegments(
            new THREE.EdgesGeometry(geometry),
            new THREE.LineBasicMaterial({ color: mood, transparent: true, opacity: 0.3 })
        ));

        let mouseX = 0, mouseY = 0, scroll = 0;
        let targetMouseX = 0, targetMouseY = 0, targetScroll = 0;

        window.onscroll = () => targetScroll = window.scrollY;

        const onMouseMove = ({ clientX, clientY }) => {
            targetMouseX = clientX - window.innerWidth / 2;
            targetMouseY = clientY - window.innerHeight / 2;
            camera.position.z = ZOOM - Math.abs(window.innerWidth / 2 - clientX) * ZOOMER;
        };

        document.addEventListener('mousemove', onMouseMove);

        const update = () => {
            const ease = (target, current) => current + (target - current) * easeFactor;
            mouseX = ease(targetMouseX, mouseX);
            mouseY = ease(targetMouseY, mouseY);
            scroll = ease(targetScroll, scroll);

            mesh.rotation.x = scroll * 0.001;
            mesh.rotation.y += 0.002;

            camera.position.x = ease(mouseX, camera.position.x) * 0.2;
            camera.position.y = ease(-mouseY, camera.position.y) * 0.2;
        };

        const animate = () => {
            requestAnimationFrame(animate);
            update();
            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            const { innerWidth, innerHeight } = window;
            camera.aspect = innerWidth / innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(innerWidth, innerHeight);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            window.onscroll = null;
        };
    }, []);

    return <div id="polyspace"></div>;
};

export default Polyspace;
