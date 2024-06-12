$(function(){
	/* alert('a'); */
	var popup = $('.popup');
	var popup_open = $('.c1>ul>li');
	var popup_close = $('.popup button');
	popup.hide();
	popup_open.click(function(){
		popup.fadeIn();
	});
	popup_close.click(function(){
		popup.fadeOut();
	});
	
	/* 메뉴 */
	var menu = $('.gnb_wrap>ul>li');
	var depth2 = $('.depth2');
	var depth2_bg = $('.gnb_bg');
	depth2.hide();
	depth2_bg.hide();
	menu.hover(
		function(){
			depth2.stop(true).slideDown();
			depth2_bg.stop(true).slideDown();
		},
		function(){
			depth2.stop(false).slideUp();
			depth2_bg.stop(false).slideUp();			
		}
	);
	
	/* 슬라이드 */ /* 변수 선언 */
	var slide = $('.main>ul>li'); 
	var current = 0; 
	var slide_interval;
	
	function timer(){
		slide_interval = setInterval(function(){
			var prev = slide.eq(current);
			
			current++;
			movement(prev,0,'-100%');
			if(current==slide.size()){current=0};
			
			var next = slide.eq(current);
			movement(next,'100%',0);			
		},1800);
	};
	
	function movement(tg,start,end){
		tg.css('left',start).stop().animate({left:end});
	};
	
	timer(); /* 불러줘야 실행 */
	
	slide.hover(
		function(){
			clearInterval(slide_interval);
		},
		function(){
			timer();
		}
	);
});
//function(e)의 e는 event의 약자
//function(e)는 매개변수

//매개변수: 
//  1. 값을 넣어줘야 일어나는것
//  2. 이벤트가 일어났을 때 값을 넣어줄 수 있음

// (일반변수 : 1. 값을 넣어 보내줘야 함)

//a태그는 하이퍼링크라는 이벤트를 가지고 있음
//a태그는 화면이동하는 성격을 가지고 있음
//e.preventDefault();는 a태그의 이벤트를 없애주는 것!!!

//.stop().animate();
//event.preventDefault();
//또는 return false;





		

















