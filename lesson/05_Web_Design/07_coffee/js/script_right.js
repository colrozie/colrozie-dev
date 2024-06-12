$(function(){
	/* alert('a'); */
	//메뉴
	var menu = $('.nav>ul>li');
	var sub = $('.nav .sub');
	
	menu.hover(
		function(){
			$(this).find(sub).stop(true, true).slideDown(500);
		},
		function(){
			$(this).find(sub).stop(false, false).slideUp(500);
		}
	);
	
	//팝업
	$('.board ul li').click(function(){
		$('.pop_up').stop(true, true).fadeIn();
	});
	$('button').click(function(){
		$('.pop_up').stop(false, false).fadeOut();
	});
	
	//배너
	var banner = $('#banner ul li');
	var current = 0;
	var timer;
	
	function slide(){
		timer = setInterval(function(){
			var prev = banner.eq(current);
			current++;
			move(prev,0,'100%');
			if(current==banner.size()){current=0};
			
			var next = banner.eq(current);
			move(next,'-100%',0);
			
		},1000);
	};
	
	function move(target,start,end){
		target.css('left',start).stop().animate({left:end});
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
















