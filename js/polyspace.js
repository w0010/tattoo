//polyspace.js
$(document).ready(function() {
var mood = 0x1F2123;
var ZOOM = 350;
var scene, camera, renderer, spotLight;
var mesh;
var mouseX = 0, mouseY = 0, scroll = 0;
	
	var scene = new THREE.Scene();
	scene.background = new THREE.Color('hsl(0, 0%, 85%)');
//	scene.fog = new THREE.Fog( 'hsl(0, 0%, 55%)', 1, 2400 );
	var sceneB = new THREE.Scene(); // Create a separate scene for the skull
	var camera = new THREE.PerspectiveCamera(150, window.innerWidth / window.innerHeight, 0.01, 10000);
	camera.position.z = ZOOM;
	var cameraB = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.01, 10000); // Narrow FOV
	cameraB.position.z = 1000; // Adjust the position according to your needs
	var renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } ); // Enable alpha for transparency
    renderer.setClearColor(0x000000, 0); // Set clear color to black with 0 opacity
	renderer.autoClear = false;
	renderer.setSize( window.innerWidth, window.innerHeight );
	
	var container = document.getElementById( 'polyspace' );
	container.appendChild( renderer.domElement );
	
	window.addEventListener('resize', function() {
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth / window.innerWidth;
		camera.updateProjectionMatrix();
	});
	spotLight = new THREE.SpotLight( {
		color: mood,
		penumbra: 1,
	} );
	spotLight.position.set( 0, -10000, 10000 ); //SpotLight.target defaults to 0, 0, 0
	scene.add(spotLight);

 


// tetrahedron
	var geometry = new THREE.TetrahedronGeometry( 4800, 0 );
	var material = new THREE.MeshPhongMaterial( {
		color: mood,
		flatShading: true,
		transparent: true,
		opacity: 0.1,
		shininess: 20, //default is 30
		polygonOffset: true,
		polygonOffsetFactor: 300,
		polygonOffsetUnits: 1,
		side: THREE.BackSide
	} );
	var mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	var geo = new THREE.EdgesGeometry( mesh.geometry );
	var mat = new THREE.LineBasicMaterial( {
		color: mood,
		transparent: true,
		opacity: 0.3,
	} );
	var wireframe = new THREE.LineSegments( geo, mat );
	mesh.add( wireframe );


//skull
	var skullGeo = new THREE.SphereGeometry(50, 32, 32); // Placeholder for the skull object
	var skullMat = new THREE.MeshBasicMaterial({color: 0xff0000});
	var skull = new THREE.Mesh(skullGeo, skullMat);
	sceneB.add( skull );

 //Add the OBJLoader to load the skull model
//	var loader = new THREE.OBJLoader();
//	loader.load(
//	    './models/SKull2021_1.obj', // replace this with the path to your OBJ file
//	    function (object) {
//	        object.traverse(function (child) {
//	            if (child instanceof THREE.Mesh) {
//	                child.material.color.setHex(0xff0000); // Set the color of the skull
//	            }
//	        });
//	        sceneB.add(object); // Add the loaded object to sceneB
//	    },
//	    function (xhr) {
//	        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//	    },
//	    function (error) {
//	        console.error('An error occurred while loading the model');
//	    }
//	);
	

// movement

var targetScroll = 0; // Add this new variable to store the target scroll position
$(window).scroll(function() { // smooth this out next
	targetScroll = $(window).scrollTop(); // Update targetScroll instead of directly setting mesh.rotation.x
});

var targetMouseX = 0, targetMouseY = 0; // Add these new variables to store the target mouse positions
function MouseMove(event) {
    targetMouseX = event.clientX - window.innerWidth / 2; // Update targetMouseX instead of mouseX
    targetMouseY = event.clientY - window.innerHeight / 2; // Update targetMouseY instead of mouseY

    var ZOOMER = 0.05;
    if (event.clientX < window.innerWidth / 2) {
        camera.position.z = ZOOM - event.clientX * ZOOMER;
    } else {
        camera.position.z = ZOOM - window.innerWidth * ZOOMER + event.clientX * ZOOMER;
    }
}
document.addEventListener( 'mousemove', MouseMove );




// render and animation
function update() {
    var easeFactor = 0.1; // Adjust this value to make the easing faster or slower

    // Apply easing to mouseX and mouseY
    mouseX += (targetMouseX - mouseX) * easeFactor;
    mouseY += (targetMouseY - mouseY) * easeFactor;

    scroll += (targetScroll - scroll) * easeFactor;
    mesh.rotation.x = scroll * 0.001; // Update mesh.rotation.x here with the eased scroll value

    mesh.rotation.y += 0.002;
    camera.position.x += (mouseX - camera.position.x) * 0.2;
    camera.position.y += (-mouseY - camera.position.y) * 0.2;
}
function render() {
	renderer.clear();
	renderer.render(scene, camera);
	renderer.clearDepth();
//	sceneB.overrideMaterial = new THREE.MeshBasicMaterial({color: 0x000000, visible: false});
	renderer.render(sceneB, cameraB);
	
    scene.overrideMaterial = null;
};
function animate() {
	requestAnimationFrame(animate);
	update();
	render();
};
animate();

});



