$(function(){
	$('.box_in .box').each(function(){
		$('.box_in .box>div').hover(
			function(){
				$(this).find('a').stop().animate({'margin-top':'-294px'},500);
			},
			function(){
				$(this).find('a').stop().animate({'margin-top':'0'},500);
			}
		);
	});
});