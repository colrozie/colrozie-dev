// alert('a');
/* $(function(){}); */
$(function(){
	/* $('.nav>ul>li').hover(function(){},function(){}); */
	$('.nav>ul>li').hover(
		function(){
			$(this).find('.sub').stop(true, true).slideDown(500);
		},
		function(){
			$(this).find('.sub').stop(false, false).slideUp(500);
		}
	);
		
});
