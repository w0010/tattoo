var moods = [ 'hsla(55, 100%, 60%,', 'hsla(170, 100%, 60%,', 'hsla(240, 100%, 70%,', 'hsla(345,100%,60%,' ];
var tone = moods [ Math.floor ( Math.random() * moods.length ) ];
var mood = tone + '1)';

$(document).ready(function() {

document.documentElement.style.setProperty('--mood', mood);
document.documentElement.style.setProperty('--fademood', tone + '0.74)');
document.documentElement.style.setProperty('--dimmood', tone + '0.12)');

});