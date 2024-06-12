$(function(){
	//alert('a');
	var panel_width = $('.slider_panel>img').width(); //600
	var panel_height = $('.slider_panel>img').height(); //400
	
	$('.slider_text').css('left',-300).each(function(index){
		$(this).attr('data-index',index); //사용자 정의 attr 순번 매겨서 요소들 연결 시키려고
	});
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);	
	}).click(function(){
		var index = $(this).attr('data-index');
		moveSlider(index);
	});
	var move;
	function timer(){
		move = setInterval(function(){
			randomNumber++;
			if(randomNumber==$('.control_button').size()){randomNumber=0};
			moveSlider(randomNumber);
		},2000);
	};
	timer();
	function moveSlider(index){
		var willMoveLeft = -(index%3*600);	
		var willMoveTop = Math.floor(index/3)*-400;
		
		$('.slider_panel').animate({left:willMoveLeft},'500');
		$('.slider_panel').animate({top:willMoveTop},'500');
		
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		$('.slider_text[data-index='+index+']').show().animate({left:20},500);
		$('.slider_text[data-index!='+index+']').hide().animate({left:-300},500);
		randomNumber = index;
	};
	var randomNumber = Math.round(Math.random()*5);
	moveSlider(randomNumber);

	$('.slider_panel>img').hover(
		function(){
			clearInterval(move);
		},
		function(){
			timer();
		}
	);
	$('.left').click(function(){
		randomNumber--;
		if(randomNumber<0){$('.control_button').size()-1;}
		//moveSlider(randomNumber);
		$('.control_button').eq(randomNumber).trigger('click');
	});
	$('.right').click(function(){
		randomNumber++;
		if(randomNumber==$('.control_button').size()){randomNumber=0}
		moveSlider(randomNumber);
	});
});

