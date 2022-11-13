$(document).ready(function() {

var ZOOM = 350;
var scene, camera, renderer, spotLight;
var mesh;
var mouseX = 0, mouseY = 0, scroll = 0;
	
	var scene = new THREE.Scene();
	scene.background = new THREE.Color('hsl(0, 0%, 11%)');
	scene.fog = new THREE.Fog( mood, 1, 1000 );
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
		color: mood,
		penumbra: 1,
	} );
	spotLight.position.set( 0, -10000, 10000 ); //SpotLight.target defaults to 0, 0, 0
	scene.add(spotLight);

 


// geometry
	var geometry = new THREE.TetrahedronBufferGeometry( 1000, 0 );
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





// movement
$(window).scroll(function() { // smooth this out next
	var scroll = $(window).scrollTop();
	var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
	mesh.rotation.x = scroll * 0.002;
} );
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
	mesh.rotation.x += 0.001;
	mesh.rotation.y += 0.001;
	camera.position.x += ( mouseX - camera.position.x ) * 0.2;
	camera.position.y += ( - ( mouseY ) - camera.position.y ) * 0.2;
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



