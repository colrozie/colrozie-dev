$(function(){
	/* alert('a'); */
	//팝업
	var pop = $('.pop');
	var close = $('.pop_wrap button');
	
	$('.pop_open').click(function(){
		pop.fadeIn();
	});
	close.click(function(){
		pop.fadeOut();
	});
	
	//메뉴
	var menu = $('.nav>ul>li');
	var depth2 = $('.nav .sub');
	
	menu.hover(
		function(){
			$(this).find(depth2).stop(true, true).slideDown(500);
		},
		function(){
			$(this).find(depth2).stop(false, false).slideUp(500);
		}
	);
	
	//탭메뉴
	var tab = $('.tab_menu ul li');
	var tab_con = $('.tab_contents div');
	
	tab.click(function(){
		var tg = $(this);
		var i = tg.index();
		
		tab.removeClass('active');
		tg.addClass('active');
		tab_con.css('display','none');
		tab_con.eq(i).css('display','block');
		return false;
	});
	
	//배너
	var banner = $('#banner ul li');
	var current = 0;
	var timer;
	
	function slide(){
		timer = setInterval(function(){
			var prev = banner.eq(current);
			move(prev,1,0);
			current++;
			
			if(current==banner.size()){current=0};
			
			var next = banner.eq(current);
			move(next,0,1);
			
		},1000);
	};
	function move(tg,start,end){
		tg.css({opacity:start}).stop().animate({opacity:end});
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





























