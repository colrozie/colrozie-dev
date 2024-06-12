$(function(){
	$('.sub_list > div').each(function(){
		var gogo = $(this);
		var subH = gogo.find('img');
		gogo.hover(
			function(){
				subH.stop(true, true).animate({'margin-top':'-97px'},500);
			},
			function(){
				subH.stop(false, false).animate({'margin-top':'0'},500);
			}
		);
	});
});
