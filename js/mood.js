var moods = [ 'hsla(60,100%,60%', 'hsla(190,100%,45%', 'hsla(348,100%,70%' ];
var tone = moods [ Math.floor ( Math.random() * moods.length ) ];
var mood = tone + ',1)';

$(document).ready(function() {

document.documentElement.style.setProperty('--mood', mood);
document.documentElement.style.setProperty('--fademood', tone + ',0.6)');
document.documentElement.style.setProperty('--dimmood', tone + ',0.15)');

});