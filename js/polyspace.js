var moods = ['hsla(353,85%,55%,']
var moodFrag = moods[Math.floor(Math.random() * moods.length)];
var mood = moodFrag + '1)';

$(document).ready(function() {

var ZOOM = 350;
var scene, camera, renderer, spotLight;
var mesh;
var mouseX = 0, mouseY = 0;
	
	var scene = new THREE.Scene();
	scene.background = new THREE.Color('hsl(220, 12%, 8%)');
	scene.fog = new THREE.Fog( mood, 1, 3500 );
	var camera = new THREE.PerspectiveCamera(150, window.innerWidth / window.innerHeight, 0.01, 10000);
	camera.position.z = ZOOM;
	var renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	
	var container = document.getElementById( 'polyspace' );
	container.appendChild( renderer.domElement );
	
	window.addEventListener('resize', function() {
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth / window.innerWidth;
		camera.updateProjectionMatrix();
	});
	spotLight = new THREE.SpotLight( {
		penumbra: 1,
	} );
	spotLight.position.set( 0, -10000, 10000 ); //SpotLight.target defaults to 0, 0, 0
	scene.add(spotLight);

 


// geometry
	var geometry = new THREE.TetrahedronBufferGeometry( 3500, 0 );
	var material = new THREE.MeshPhongMaterial( {
		color: mood,
		flatShading: true,
		transparent: true,
		opacity: 0.1,
		shininess: 10, //default is 30
		side: THREE.BackSide
	} );
	var mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	var geo = new THREE.EdgesGeometry( mesh.geometry );
	var mat = new THREE.LineBasicMaterial( {
		color: mood,
	} );
	var wireframe = new THREE.LineSegments( geo, mat );
	mesh.add( wireframe );





//movement

function MouseMove(event) {
	mouseX = event.clientX - window.innerWidth / 2;
	mouseY = event.clientY - window.innerHeight / 2;
	var ZOOMER = 0.05; // 0.05 is perfect
	if (event.clientX < window.innerWidth / 2) {
		camera.position.z = ZOOM - event.clientX * ZOOMER;
		mesh.rotation.y = event.clientX * 0.001;
	} else {
		camera.position.z = ZOOM - window.innerWidth * ZOOMER + event.clientX * ZOOMER;
		mesh.rotation.y = event.clientX * 0.001;
	};
}; 
document.addEventListener( 'mousemove', MouseMove );




// render and animation
function update() {
	mesh.rotation.x += 0.002;
	mesh.rotation.y += 0.002;
	camera.position.x += ( mouseX - camera.position.x ) * 0.15;
	camera.position.y += ( - ( mouseY ) - camera.position.y ) * 0.15;
};
function render() {
	renderer.render(scene, camera);
};
function animate() {
	requestAnimationFrame(animate);
	update();
	render();
};
animate();

});