$(function(){
	/* alert('a'); */
	$('#contents .popup').click(function(){
		$('.pop').fadeIn();
	});	
	$('.pop button').click(function(){
		$('.pop').fadeOut();
	});	
	/* 메뉴 */
	$('.nav>ul>li').each(function(){
		$(this).mouseenter(function(){
			$('.sub').stop(true, true).slideDown();
		});
	});
	$('.nav>ul>li').each(function(){
		$(this).mouseleave(function(){
			$('.sub').stop(false, false).slideUp();
		});
	});
	
	/* 탭메뉴 */
	var tab = $('.tab>li');
	var content = $('.tab_con>div');
	content.hide();
	content.eq(0).show();
	tab.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		tab.removeClass('active');
		tg.addClass('active');
		content.css('display','none');
		content.eq(i).css('display','block');
	});
	
	/* 이미지 슬라이드 */
	var banner = $('#banner li');
	var current = 0;
	setInterval(function(){
		var prev = banner.eq(current);
		move(prev,'0','-100%',1,0);
		current++;
		if(current==banner.size()){current=0;} /* = > 값, == > 비교 */
		var next = banner.eq(current);
		move(next,'100%','0%',0,1);
	},2000);
	function move(tg,start,end,op1,op2){
		tg.css({left:start,opacity:op1}).stop().animate({left:end,opacity:op2},2000);
	};
});

/* 정의가 중요, 효과는 안에 넣으면 어떻게든 됨. */
/* animate 앞엔 stop 붙이기 */
/* css메서드 안에 2가지 이상의 내용을 넣을 땐{}를 씀 */

//1. move함수로 정의를 먼저 한다.
//2. 순환시키기 위해 setInterval 안에 내용을 집어넣는다.



























