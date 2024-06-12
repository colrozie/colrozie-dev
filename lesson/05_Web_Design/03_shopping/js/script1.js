/* $(function(){
	alert('a');
}); */
$(function(){
	$('.nav>ul>li').on('mouseenter focus' ,function(){
		$('.nav>ul>li .sub').stop(true, true).slideDown();
	});
	$('.nav>ul>li').on('mouseleave blur' ,function(){
		$('.nav>ul>li .sub').stop(false, false).slideUp();
	});
	$('.popup').click(function(e){
		/* e.preventDefault(); jQeury로 해결*/
		$('.pop').fadeIn();
		return false; /* JAVA로 해결 */
	});
	$('.btn').click(function(){
		$('.pop').fadeOut();
	});
	/* tab메뉴 */
	var tab = $('.tab>li');
	var content = $('.tab_content > div');
	content.hide().eq(0).show();
	tab.click(function(){
		var tg = $(this);
		var i = tg.index();
		tab.removeClass('active');
		tg.addClass('active');
		content.css('display','none');
		content.eq(i).css('display','block');
		return false; //맨 끝에 써야함
	});
	/* 슬라이드 이미지 */
	var banner = $('#banner ul li');
	var current = 0; //최근의, 현재의
	var timer;
	function move(tg,start,end){
		tg.css('top',start).stop().animate({top:end},500);
	};
	timer=setInterval(function(){
		var prev = banner.eq(current);
		move(prev,'0%','-100%');
		current++;
		if(current>=banner.size()) current = 0;
		var next = banner.eq(current);
		move(next,'100%','0%');
	},1000);	
	banner.hover(
		function(){
			clearInterval(timer);
		},
		function(){
			timer=setInterval(function(){
				var prev = banner.eq(current);
				move(prev,'0%','-100%');
				current++;
				if(current>=banner.size()) current = 0;
				var next = banner.eq(current);
				move(next,'100%','0%');
			},1000);			
		}
	);
});
	//파라메터 세 개
	/* function aaa(,,){};
	function bb(,){};
	function cc(,,){};
	function ejej(,,,,){}; */


















