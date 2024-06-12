$(function(){
	//alert('a');
	$('button').click(function(){
		var html = $(this).html();
		var evalText = "$('div')."+html;
		eval(evalText);
	});
	
	setInterval(function(){
		$('div').animate({left:'500'},2000).animate({left:'0'},2000);
	},5000);
});