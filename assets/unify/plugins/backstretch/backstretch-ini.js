$(document).ready(function() {
	$.getScript("assets/unify/plugins/backstretch/jquery.backstretch.min.js", function(){
		$(".fullscreen-static-image").backstretch([
	  "assets/unify/img/bg/img11.jpg", "assets/unify/img/bg/img1.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image1").backstretch([
	  "../../assets/miapower/images/cover.png",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image2").backstretch([
	  "assets/unify/img/bg/img4.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image3").backstretch([
	  "assets/unify/img/bg/img5.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image4").backstretch([
	  "assets/unify/img/bg/img6.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image5").backstretch([
	  "assets/unify/img/bg/img7.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image6").backstretch([
	  "assets/unify/img/bg/img8.jpg",
	  ], {duration: 8000, fade: 800});
	});
});
