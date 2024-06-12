$(function(){
	var slide = $('.main>ul>li'); //1depth만을 얘기 함
	var current = 0;
	var slide_interval;
	
	function timer(){
		slide_interval = setInterval(function(){
			var prev = slide.eq(current); //선택한 요소의 특정 인덱스 번호를 가진 요소를 반환
			
			current++;
			movement(prev,0,'-100%');
			if(current==slide.size()){current=0};
			
			var next = slide.eq(current);
			movement(next,'100%',0);
		},1000);
	};
	
	function movement(tg,start,end){
		tg.css('left',start).stop().animate({left:end});
	};
	
	timer();
	
	slide.hover(
		function(){
			clearInterval(slide_interval);
		},
		function(){
			timer();
		}
	);
});