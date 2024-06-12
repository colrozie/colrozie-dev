$(function(){
	var menu = $('#animate > li');
	menu.hover(
		function(){
			close();
			var tg = $(this);
			var onImg = tg.find('.text_image > .on');
			var offImg = tg.find('.text_image > .off');
			var menuImage = tg.find('.menu_image');
			var imageWidth = menuImage.find('img').innerWidth();
			onImg.css('display','block');
			offImg.css('display','none');
			menuImage.animate({width:imageWidth},{duration:600, queue:false, easing:'easeOutCubic'});
		},
		function(){
			var tg = $(this);
			var onImg = tg.find('.text_image > .on');
			var offImg = tg.find('.text_image > .off');
			var menuImage = tg.find('.menu_image');
			var imageWidth = 0;
			onImg.css('display','none');
			offImg.css('display','block');
			menuImage.animate({width:imageWidth},{duration:600, queue:false, easing:'easeOutCubic'});
			open();
		}
	);
	
	function open(){
		var tg = $('#animate > li').eq(0);
		var onImg = tg.find('.text_image > .on');
		var offImg = tg.find('.text_image > .off');
		var menuImage = tg.find('.menu_image');
		var imageWidth = menuImage.find('img').innerWidth();
		onImg.css('display','block');
		offImg.css('display','none');
		menuImage.animate({width:imageWidth},{duration:600, queue:false, easing:'easeOutCubic'});
		
	};
	function close(){
			var tg = $('#animate > li').eq(0);
			var onImg = tg.find('.text_image > .on');
			var offImg = tg.find('.text_image > .off');
			var menuImage = tg.find('.menu_image');
			var imageWidth = 0;
			onImg.css('display','none');
			offImg.css('display','block');
			menuImage.animate({width:imageWidth},{duration:600, queue:false, easing:'easeOutCubic'});
	};
	open();
});







