$(function(){
	$('button.move').click(function(){
		var easing = $('select > option:selected').html();
		$('div').animate({left:'500'},2000,easing).animate({left:'0'},2000,easing);
	});
	$('button.stop').click(function(){
		var html = $(this).html();
		var evalText = "$('div')."+html;
		eval(evalText);
	});	
});


