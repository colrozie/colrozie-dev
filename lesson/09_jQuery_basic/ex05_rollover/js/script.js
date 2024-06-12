$(function(){
	/* alert('a'); */
	/* var a = $(''); */
	$('.rollover').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		// src_off = iimages/menu01_off.png
		var src_on = src_off.replace('_off','_on');
		// src_on = iimages/menu01_on.png		
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
});