$(function(){
	/* 이미지슬라이드 */
	var banner = $('#imgBnArea ul li');
	var current = 0; //최근에, 현재
	var timer;
	function move(tg,start,end){
		tg.css('left',start).stop().animate({left:end},500);
	};
	timer=setInterval(function(){ /* 반복 */
		var prev = banner.eq(current);
		move(prev,'0%','-100%');
		current++;
		if(current>=banner.size()) current=0;
		var next = banner.eq(current);
		move(next,'100%','0%');
	},4000);

	banner.hover(
		function(){
			clearInterval(timer); /* 반복멈추기 */
		},
		function(){
			timer=setInterval(function(){ /* 반복 */
				var prev = banner.eq(current);
				move(prev,'0%','-100%');
				current++;
				if(current>=banner.size()) current=0;
				var next = banner.eq(current);
				move(next,'100%','0%');
			},4000);	
		});
});