var moods = [ 'hsla(75,100%,65%', 'hsla(195,100%,65%', 'hsla(330,100%,65%' ];
var tone = moods [ Math.floor ( Math.random() * moods.length ) ];
var mood = tone + ',1)';

$(document).ready(function() {

document.documentElement.style.setProperty('--mood', mood);
document.documentElement.style.setProperty('--fademood', tone + ',0.6)');
document.documentElement.style.setProperty('--lowmood', tone + ',0.15)');
document.documentElement.style.setProperty('--nomood', tone + ',0)');

});