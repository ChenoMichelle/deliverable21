var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.querySelector("#video");
	video.autoplay = false;
	video.loop = false;

	
//Play Video
 document.querySelector("#play").addEventListener("click", function() {
	console.log("Let the Video Play");
	video.play()


});

//Pause Video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Let the Video Pause");
	video.pause();
});

});


