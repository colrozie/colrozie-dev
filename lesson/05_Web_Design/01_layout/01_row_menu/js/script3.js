// alert('a');
$(function(){
/* 	$('.nav>ul>li').mouseenter(function(){
		$(this).find('>.sub').stop(true, true).slideDown();
	});
	$('.nav>ul>li').mouseleave(function(){
		$(this).find('>.sub').stop(false, false).slideUp();
	}); */
	/* $('.nav>ul>li').each(function(){
		$(this).mouseenter(function(){
			$('.sub').stop(true, true).slideDown();
		});
	});
	$('.nav>ul>li').each(function(){
		$(this).mouseleave(function(){
			$('.sub').stop(false, false).slideUp();
		});
	}); */
	var nav_bg = $('.nav_bg');
	nav_bg.hide();
	$('.nav>ul>li').each(function(){
		$(this).mouseenter(function(){
			$('.sub').stop(true, true).slideDown();
			nav_bg.stop(true, true).slideDown();
		}).mouseleave(function(){
			$('.sub').stop(false, false).slideUp();
			nav_bg.stop(false, false).slideup();
		});
		
	/* $('.nav>ul>li').each(function(){ */
	});
});


























