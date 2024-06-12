// alert('a');
$(function(){
/* 	$('.nav>ul>li').mouseenter(function(){
		$(this).find('>.sub').stop(true, true).slideDown();
	});
	$('.nav>ul>li').mouseleave(function(){
		$(this).find('>.sub').stop(false, false).slideUp();
	}); */
	$('.nav>ul>li').each(function(){
		$(this).mouseenter(function(){
			$('.sub').stop(true, true).slideDown();
		});
	});
	$('.nav>ul>li').each(function(){
		$(this).mouseleave(function(){
			$('.sub').stop(false, false).slideUp();
		});
	});
});


























