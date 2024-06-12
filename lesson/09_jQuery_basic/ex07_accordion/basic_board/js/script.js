jQuery(document).ready(function(){
	$('#board').each(function(){
		var dl = $(this);
		var allDt = dl.find('.title2');
		var allDd = dl.find('.content_wrap');
		allDd.hide();
		allDt.css('cursor','pointer');
		allDt.click(function(){
			var dt = $(this);
			var dd = dt.parent('.contents').find('.content_wrap');
			allDd.hide();
			dd.slideDown(1000);
			allDt.css('cursor','pointer');
			dt.css('cursor','default');
		});
	});
});
