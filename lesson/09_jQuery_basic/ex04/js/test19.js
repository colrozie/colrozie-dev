$(function(){
	$('#div1').hover(
		function(){
			$('#div1').text('텍스트에 마우스가 올렸을때');
		},
		function(){
			$('#div1').text('텍스트에 마우스가 벗어났을때');
		}
	); 	
});

