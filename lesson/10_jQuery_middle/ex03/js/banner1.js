$(function(){
	//alert('a');
	var current = 0; //카운트
	var banner = $('#wrapper li'); //움직일 대상
	

	setInterval(function(){
		var prev = banner.eq(current);
		move(prev,'0%','-100%');
		current++;
		if(current == banner.size()){current = 0;};
		
		var next = banner.eq(current);
		move(next,'100%','0%');
	},1000);

	function move(tg,start,end){
		tg.css('top',start).stop().animate({top:end},{duration:500,ease:'easeOutCubic'});
	};
});