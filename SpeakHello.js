(function (window) { //Step 2 wrapped entire script in IIFE
	var helloSpeaker = {}; //Step 3 created hellospeaker object
	var speakWord = "Hello";  
	helloSpeaker.speak = function (name) {
		console.log(speakWord + " " + name); //Step 4 rewrote function
	}
	window.helloSpeaker = helloSpeaker; //Step 5 expose to global scope
})(window);