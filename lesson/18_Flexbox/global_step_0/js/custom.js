$(document).ready(function(){  	
	$('.btnMenu').click(function(){
		$('#gnbMo').fadeIn();
	});
	$('#gnbMo > a').click(function(){
		$('#gnbMo').fadeOut();
	});
	
	var banner = $('#banner p');
	var timer;
	var current = 0;
	
	function slide(){
		timer = setInterval(function(){
				
		},1000);
	};
	
	slide();
});

















