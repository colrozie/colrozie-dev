$(function(){
	var menu = $('#quickMenu li');
	menu.hover(
		function(){
			close();
			var tg = $(this);
			var onImg = tg.find('.textImage > .on');
			var offImg = tg.find('.textImage > .off');
			var menuImage = tg.find('.menuImage');
			var imageWidth = menuImage.find('img').innerWidth();
			onImg.css('display','block');
			offImg.css('display','none');
			menuImage.animate({width:imageWidth},{duration:600, queue:false, easing:'easeOutCubic'});
		},
		function(){
			var tg = $(this);
			var onImg = tg.find('.textImage > .on');
			var offImg = tg.find('.textImage > .off');
			var menuImage = tg.find('.menuImage');
			var imageWidth = 0;
			onImg.css('display','none');
			offImg.css('display','block');
			menuImage.animate({width:imageWidth},{duration:600, queue:false, easing:'easeOutCubic'});
			open();
		}
	);
	
	function open(){
		var tg = $('#quickMenu li').eq(0);
		var onImg = tg.find('.textImage > .on');
		var offImg = tg.find('.textImage > .off');
		var menuImage = tg.find('.menuImage');
		var imageWidth = menuImage.find('img').innerWidth();
		onImg.css('display','block');
		offImg.css('display','none');
		menuImage.animate({width:imageWidth},{duration:600, queue:false, easing:'easeOutCubic'});
		
	};
	function close(){
			var tg = $('#quickMenu li').eq(0);
			var onImg = tg.find('.textImage > .on');
			var offImg = tg.find('.textImage > .off');
			var menuImage = tg.find('.menuImage');
			var imageWidth = 0;
			onImg.css('display','none');
			offImg.css('display','block');
			menuImage.animate({width:imageWidth},{duration:600, queue:false, easing:'easeOutCubic'});
	};
	open();
});









