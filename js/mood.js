var moods = [ 'hsla(60,100%,60%', 'hsla(190,100%,38%', 'hsla(353,100%,50%' ];
var tone = moods [ Math.floor ( Math.random() * moods.length ) ];
var mood = tone + ',0.9)';

$(document).ready(function() {

document.documentElement.style.setProperty('--mood', mood);
document.documentElement.style.setProperty('--fademood', tone + ',0.6)');
document.documentElement.style.setProperty('--dimmood', tone + ',0.15)');

});