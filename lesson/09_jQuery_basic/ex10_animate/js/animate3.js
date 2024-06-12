$(function(){
	$('.banner li').each(function(){
		var gogo = $(this);
		gogo.hover(
			function(){
				gogo.find('a').stop().animate({'margin-left':'75px'},500);
			},
			function(){
				gogo.find('a').stop().animate({'margin-left':'0'},500);
			}
		);
	});
});
