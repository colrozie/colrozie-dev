$(function(){
	var interval = 1000;
	$('.slideshow').each(function(){
		var timer;
		var container = $(this);
		function switchImg(){
			var imgs = container.find('a');
			var first = imgs.eq(0);
			var second = imgs.eq(1);
			first.fadeOut().appendTo(container);
			second.fadeIn();
		};
		function startTimer(){
			timer = setInterval(switchImg,interval);
		};
		function stopTimer(){
			clearInterval(timer);
		};
		startTimer();
		container.find('a').hover(
			function(){
				stopTimer();
			},
			function(){
				startTimer();
			}
		);
	});
});

