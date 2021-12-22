var moods = [ 'hsla(57,85%,40%', 'hsla(170,100%,50%', 'hsla(345,100%,60%' ];
var tone = moods [ Math.floor ( Math.random() * moods.length ) ];
var mood = tone + ',0.9)';

$(document).ready(function() {

document.documentElement.style.setProperty('--mood', mood);
document.documentElement.style.setProperty('--fademood', tone + ',0.6)');
document.documentElement.style.setProperty('--dimmood', tone + ',0.15)');

});