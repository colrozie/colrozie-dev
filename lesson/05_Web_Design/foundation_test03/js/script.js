$(function(){
	//alert('a');
	$('.pop_open').click(function(){
		$('.pop').fadeIn(500);
	});
	$('.pop .close').click(function(){
		$('.pop').fadeOut(500);
	});
	
	$('.nav_bg').hide();
	$('.sub').hide();
	
	$('.nav > ul > li').hover(
		function(){
			$('.sub').stop(true, true).slideDown(500);
			$('.nav_bg').stop(true, true).slideDown(500);
		},
		function(){
			$('.sub').stop(false, false).slideUp(500);
			$('.nav_bg').stop(false, false).slideUp(500);			
		}
	);
	
	var banner = $('#banner ul li');
	var current = 0;
	var timer;
	
	function move(tg, start, end){
		tg.css('left',start).animate({left:end});
	};
	
	function slide(){
		timer = setInterval(function(){
			var prev = banner.eq(current);
			move(prev,'0','-100%');
			current++;
			if(current==banner.size()){current=0;}
			
			var next = banner.eq(current);
			move(next,'100%','0');
		},2500);
	};
	
	banner.hover(
		function(){
			clearInterval(timer);
		},
		function(){
			slide();
		}
	);
	
	slide();
});