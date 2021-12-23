var hues = [ '100', '210', '320' ];
var hue = hues [ Math.floor ( Math.random() * hues.length ) ];

var moods = [ 'hsla(' + hue + ',100%,65%' ];
var mood = moods + ',1)';

$(document).ready(function() {

document.documentElement.style.setProperty('--hue', hue);
document.documentElement.style.setProperty('--mood', mood);
document.documentElement.style.setProperty('--fademood', moods + ',0.8)');
document.documentElement.style.setProperty('--lowmood', moods + ',0.2)');
document.documentElement.style.setProperty('--nomood', moods + ',0)');

});