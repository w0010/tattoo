var moods = [ 'hsla(55, 100%, 60%,', 'hsla(170, 100%, 60%,', 'hsla(240, 100%, 70%,', 'hsla(345,100%,60%,' ]
var moodFrag = moods [ Math.floor ( Math.random() * moods.length ) ];
var mood = moodFrag + '1)';




$(document).ready(function() {

var moodAlt;
if (mood = 'hsla(50, 80%, 40%, 1)') {
	moodAlt = 'hsla(345, 90%, 60%, 1)'
} else {

};
if (mood = 'hsla(195, 80%, 40%, 1)') {
	moodAlt = 'hsla(345, 90%, 60%, 1)'
} else {

};
if (mood = 'hsla(345, 90%, 60%, 1)') {
	moodAlt = 'hsla(50, 80%, 40%, 1)'
} else {

};

document.documentElement.style.setProperty('--mood', mood);
document.documentElement.style.setProperty('--moodDim', moodFrag + '0.6)');
document.documentElement.style.setProperty('--moodDark', moodFrag + '0.2)');
document.documentElement.style.setProperty('--moodAlt', moodAlt);


/*
var p = document.getElementsByTagName('p');
for (var i = 0; i < p.length; i++) {
	p[i].style.color = currentMood;
//	p[i].style.textShadow = shadow + " 0.15)";
};
var h1 = document.getElementsByTagName('h1');
for (var i = 0; i < h1.length; i++) {
	h1[i].style.color = currentMood;
//	h1[i].style.textShadow = shadow + " 0.5)";
};
var h2 = document.getElementsByTagName('h2');
for (var i = 0; i < h2.length; i++) {
	h2[i].style.color = currentMood;
//	h2[i].style.textShadow = shadow + " 0.1)";
};
var h3 = document.getElementsByTagName('h3');
for (var i = 0; i < h3.length; i++) {
	h3[i].style.color = currentMood;
//	h3[i].style.textShadow = shadow + " 0.1)";
}
var glass = document.getElementsByClassName('glass');
for (var i = 0; i < glass.length; i++) {
	glass[i].style.border = swing + '0.05) 24px outset';
//	glass[i].style.backgroundColor = swing + '0.2';
};*/
//document.getElementById('project-container').style.borderBottom = moodFrag + '0.6) 1rem solid';
//document.getElementById('core-container').style.backgroundColor = swing + '0.03';

//document.getElementById('cover').style.backgroundColor = swing + '0.2';


var moodClass = document.getElementsByClassName('mood');
for (var i = 0; i < moodClass.length; i++) {
	moodClass[i].style.color = mood;
};
//var moodB = document.getElementsByClassName('mood-half');
//for (var i = 0; i < moodB.length; i++) {
//	moodB[i].style.color = moodFrag + '0.5)';
//};
//var moodC = document.getElementsByClassName('mood-dim');
//for (var i = 0; i < moodC.length; i++) {
//	moodC[i].style.color = moodFrag + '0.3)';
//};
//var moodD = document.getElementsByClassName('mood-line');
//for (var i = 0; i < moodD.length; i++) {
//	moodD[i].style.backgroundColor = mood;
//};



var maxMax = document.getElementsByClassName('max-max');
for (var i = 0; i < maxMax.length; i++) {
	maxMax[i].style.background = moodFrag + '0.50)';
	maxMax[i].style.color = moodFrag + '1';
};
var maxMid = document.getElementsByClassName('max-mid');
for (var i = 0; i < maxMid.length; i++) {
	maxMid[i].style.background = 'linear-gradient(-90deg,' + moodFrag + '0.50) 0%,' + moodFrag + '0.50) 66.6%,' + moodFrag + '0) 66.6%)';
	maxMid[i].style.color = moodFrag + '1';
};
var maxMin = document.getElementsByClassName('max-min');
for (var i = 0; i < maxMin.length; i++) {
	maxMin[i].style.background = 'linear-gradient(-90deg,' + moodFrag + '0.50) 0%,' + moodFrag + '0.50) 33.3%,' + moodFrag + '0) 33.3%)';
	maxMin[i].style.color = moodFrag + '1';
};
var midMax = document.getElementsByClassName('mid-max');
for (var i = 0; i < midMax.length; i++) {
	midMax[i].style.background = moodFrag + '0.30)';
	midMax[i].style.color = moodFrag + '0.60';
};
var midMid = document.getElementsByClassName('mid-mid');
for (var i = 0; i < midMid.length; i++) {
	midMid[i].style.background = 'linear-gradient(-90deg,' + moodFrag + '0.30) 0%,' + moodFrag + '0.30) 66.6%,' + moodFrag + '0) 66.6%)';
	midMid[i].style.color = moodFrag + '0.60';
};
var midMin = document.getElementsByClassName('mid-min');
for (var i = 0; i < midMin.length; i++) {
	midMin[i].style.background = 'linear-gradient(-90deg,' + moodFrag + '0.30) 0%,' + moodFrag + '0.30) 33.3%,' + moodFrag + '0) 33.3%)';
	midMin[i].style.color = moodFrag + '0.60';
};
var minMax = document.getElementsByClassName('min-max');
for (var i = 0; i < minMax.length; i++) {
	minMax[i].style.background = moodFrag + '0.15)';
	minMax[i].style.color = moodFrag + '0.30';
};
var minMid = document.getElementsByClassName('min-mid');
for (var i = 0; i < minMid.length; i++) {
	minMid[i].style.background = 'linear-gradient(-90deg,' + moodFrag + '0.15) 0%,' + moodFrag + '0.15) 66.6%,' + moodFrag + '0) 66.6%)';
	minMid[i].style.color = moodFrag + '0.30';
};
var minMin = document.getElementsByClassName('min-min');
for (var i = 0; i < minMin.length; i++) {
	minMin[i].style.background = 'linear-gradient(-90deg,' + moodFrag + '0.15) 0%,' + moodFrag + '0.15) 33.3%,' + moodFrag + '0) 33.3%)';
	minMin[i].style.color = moodFrag + '0.30';
};
//all except links
//document.body.style.color = swing + "0.9)";



//document.body.style.textShadow = shadow + mood;



});





