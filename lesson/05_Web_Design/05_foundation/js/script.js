$(function(){
	/* alert('a'); */
		$('.nav>ul>li').on('mouseenter focus' ,function(){
		$('.nav>ul>li .sub').stop(true, true).slideDown();
	});
	$('.nav>ul>li').on('mouseleave blur' ,function(){
		$('.nav>ul>li .sub').stop(false, false).slideUp();
	});
});