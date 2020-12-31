(function (window) { //Step 6 wrapped contentsinsode IIFE
	var byeSpeaker = {}; //Step 7 created object 
	var speakWord = "Good Bye";
	byeSpeaker.speak = function (name) { //Step 8 rewrote function
		console.log(speakWord + " " + name);
	}
	window.byeSpeaker = byeSpeaker;
  

})(window);