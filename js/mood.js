var hues = [ '75', '195', '330' ];
var hue = hues [ Math.floor ( Math.random() * hues.length ) ];

var moodhue = [ 'hsla(' + hue + ',100%,65%' ];
var mood = moodhue + ',1)';

$(document).ready(function() {

document.documentElement.style.setProperty('--hue', hue);
document.documentElement.style.setProperty('--mood', mood);
document.documentElement.style.setProperty('--fademood', moodhue + ',0.85)');
document.documentElement.style.setProperty('--lowmood', moodhue + ',0.15)');
document.documentElement.style.setProperty('--nomood', moodhue + ',0)');

});