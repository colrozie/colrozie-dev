$(function(){
	var menu = $('#nav > li');
	
	function back(op){
		op.animate({width:'97px'},600);
	};
	var back_img = $('#nav > li > .tre');
	menu.hover(
		function(){
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
			
		}
	);
	back(back_img)
	
});















