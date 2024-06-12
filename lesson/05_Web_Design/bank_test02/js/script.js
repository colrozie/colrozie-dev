$(function(){
	//팝업
	$('.pop_open').click(function(){
		$('.pop').fadeIn();
	});	
	$('.pop button').click(function(){
		$('.pop').fadeOut();
	});	
	
	//메뉴
	$('.nav>ul>li').each(function(){
		$(this).mouseenter(function(){
			$(this).find('.sub').stop().slideDown(500);
		});
	});
	$('.nav>ul>li').each(function(){
		$(this).mouseleave(function(){
			$(this).find('.sub').stop().slideUp(500);
		});
	});
	
	//탭메뉴
	var tab = $('.tab_menu ul li');
	var con = $('.tab_contents > div');
	
	tab.click(function(e){
		e.preventDefault;
		var i = $(this).index();
		tab.removeClass('active');
		$(this).addClass('active');
		con.hide();
		con.eq(i).show();
	});
	
	$('.gallery ul li').hover(
		function(){
			$(this).find('img').stop().animate({opacity:.5});
		},
		function(){
			$(this).find('img').stop().animate({opacity:1});
		}
	);
	
	//슬라이드
	function move(target,start,end,op1,op2){
		target.css({left:start,opacity:op1}).stop().animate({left:end,opacity:op2},1000);
	};
	
	var current = 0;
	var banner = $('#banner ul li');
	var timer;
	function slider(){
		timer = setInterval(function(){
			var prev = banner.eq(current);
			move(prev,'0','100%',1,0);
			current++;
			if(current==banner.size()){current=0;}
			
			var next = banner.eq(current);
			move(next,'100%','0',0,1);	
		},2500);
	};
	slider();
	
	banner.hover(
		function(){
			clearInterval(timer);
		},
		function(){
			slider();
		}
	);
});

