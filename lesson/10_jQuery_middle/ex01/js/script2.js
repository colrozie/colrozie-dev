$(function(){
	//alert('a');
	
	$('#nav > ul > li#springBtn').bind('click',function(){
		$('#nav > ul > li#springBtn').attr('src','images/btn1_2.jpg');
		$('#image').removeClass().addClass('spring');
	});
	$('#nav > ul > li#summerBtn').bind('click',function(){
		$('#image').removeClass().addClass('summer');
	});
	$('#nav > ul > li#fallBtn').bind('click',function(){
		$('#image').removeClass().addClass('fall');
	});
	$('#nav > ul > li#winterBtn').bind('click',function(){
		$('#image').removeClass().addClass('winter');
	});
});
