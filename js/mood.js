var moods = [ 'hsla(55, 100%, 60%,', 'hsla(170, 100%, 60%,', 'hsla(240, 100%, 70%,', 'hsla(345,100%,60%,' ]

var moodFrag = moods [ Math.floor ( Math.random() * moods.length ) ];

var mood = moodFrag + '1)';




$(document).ready(function() {

var altMood;
if (mood = 'hsla(50, 80%, 40%, 1)') {
	altMood = 'hsla(345, 90%, 60%, 1)'
} else {

};
if (mood = 'hsla(195, 80%, 40%, 1)') {
	altMood = 'hsla(345, 90%, 60%, 1)'
} else {

};
if (mood = 'hsla(345, 90%, 60%, 1)') {
	altMood = 'hsla(50, 80%, 40%, 1)'
} else {

};

document.documentElement.style.setProperty('--mood', mood);
document.documentElement.style.setProperty('--fadeMood', moodFrag + '0.74)');
document.documentElement.style.setProperty('--dimMood', moodFrag + '0.12)');
document.documentElement.style.setProperty('--altMood', moodAlt);

});





