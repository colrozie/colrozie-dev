$(function(){
	//alert('a');
	$('#nav > ul > li#springBtn').bind('click',function(){
		$('#image img').attr('src', 'images/spring.jpg');
	});
	$('#nav > ul > li#summerBtn').bind('click',function(){
		$('#image img').attr('src', 'images/summer.jpg');
	});
	$('#nav > ul > li#fallBtn').bind('click',function(){
		$('#image img').attr('src', 'images/fall.jpg');
	});
	$('#nav > ul > li#winterBtn').bind('click',function(){
		$('#image img').attr('src', 'images/winter.jpg');
	});
});
