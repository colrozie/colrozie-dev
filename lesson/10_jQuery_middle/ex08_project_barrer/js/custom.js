$(document).ready(function(){
	$('body, html').stop().animate({'scrollTop':0},1500,'swing');
	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop();
		//$('h1').text(scroll);
		for(var i = 0; i < 5; i++){
			$('section > article').eq(i).css({'transform':'translateZ('+parseInt((-5000*i)+scroll)+'px)'})
			//var scrollI = $('section > article').height();
			if(scroll>=i*5000 && scroll<(i+1)*5000){
				$('.scrollNavi li').removeClass();
				$('article').removeClass();
				$('.scrollNavi li').eq(i).addClass('on');
				$('article').eq(i).addClass('on');
			}
		};
	});
	$('.scrollNavi li').click(function(){
		var j = $(this).index();
		$('body, html').stop().animate({'scrollTop':5000*j},1500,'swing');
	});
	$('article').on('mousemove',function(){
		var posX = e.pageX;
		var posY = e.pageY;
		$('.obj11').css({'right':0-(posX/30), 'left':0-(posY/30)});
		$('.pl1').css({'right':130+(posX/20), 'left':-40+(posY/30)});
		$('.obj12').css({'right':130+(posX/20), 'left':-40+(posY/30)});
	});	
});

