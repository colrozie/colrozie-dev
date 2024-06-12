/* $(function(){
	alert('a');
}); */

$(function(){
	$('.nav>ul>li').on('mouseenter focus',function(){
		$('.nav>ul>li .sub').stop(true, true).slideDown();
	});
	$('.nav>ul>li').on('mouseleave blur',function(){
		$('.nav>ul>li .sub').stop(false, false).slideUp();
	});
});

/* 	$('.nav>ul>li').mouseenter(function(){});
	$('.nav>ul>li').focus(function(){}); */