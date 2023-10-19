import React, { useEffect } from 'react';
import * as THREE from 'three';

const Polyspace = () => {
    useEffect(() => {
        const dark = 0x1F2123;
        const light = 0xD9D9D9;

        //scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(light);
        //scene.fog = new THREE.Fog(light, 1, 1000);

        const camera = new THREE.PerspectiveCamera(150, window.innerWidth / window.innerHeight, 0.01, 10000);
        const zoom = camera.position.z = 350;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        document.getElementById('polyspace').appendChild(renderer.domElement);

        const spotLight = new THREE.SpotLight(light);
        spotLight.position.set(0, -900, 900);
        scene.add(spotLight);


        //geometry
        const geometry = new THREE.TetrahedronGeometry(1000);
        const material = new THREE.MeshPhongMaterial({
            color: light,
            flatShading: true,
            transparent: true,
            opacity: 0.05,
            shininess: 30,
            polygonOffset: true,
            polygonOffsetFactor: 300,
            polygonOffsetUnits: 1,
            side: THREE.BackSide
        });
        const mesh = new THREE.Mesh(geometry, material);
        const meshRotator = new THREE.Group();
        meshRotator.add(mesh);
        scene.add(meshRotator);

        mesh.add(new THREE.LineSegments(
            new THREE.EdgesGeometry(geometry),
            new THREE.LineBasicMaterial({ color: dark, transparent: true, opacity: 0.5 })
        ));


        //movement
        let mouseX = 0, mouseY = 0, scroll = 0;
        let targetMouseX = 0, targetMouseY = 0, targetScroll = 0;

        window.onscroll = () => targetScroll = window.scrollY;

        const onMouseMove = ({ clientX, clientY }) => {
            targetMouseX = clientX - window.innerWidth / 2;
            targetMouseY = clientY - window.innerHeight / 2;
            
            const zoomer = 0.1;
            camera.position.z = zoom - Math.abs(window.innerWidth / 2 - clientX) * zoomer;
        };

        document.addEventListener('mousemove', onMouseMove);

        const update = () => {
            const easeFactor = 0.01;
            const ease = (target, current) => current + (target - current) * easeFactor;
            mouseX = ease(targetMouseX, mouseX);
            mouseY = ease(targetMouseY, mouseY);
            scroll = ease(targetScroll, scroll);
            
            const mouseQuaternion = new THREE.Quaternion()
                .multiplyQuaternions(
                    new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), mouseX * 0.0006),
                    new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), mouseY * 0.0003)
                );
            const scrollQuaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), scroll * 0.001);
            meshRotator.quaternion.multiplyQuaternions(mouseQuaternion, scrollQuaternion);

            mesh.rotation.x += 0.0003;

            //camera.position.x = ease(mouseX, camera.position.x) * 1;
            //camera.position.y = ease(-mouseY, camera.position.y) * 1;
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

    return <div id="polyspace" />;
};

export default Polyspace;
