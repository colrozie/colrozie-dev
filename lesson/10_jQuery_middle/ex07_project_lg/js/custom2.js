$(document).ready(function(){
/* 	var ht = $(window).height();
	$('section').height(ht);
	$(window).on('resize',function(){
		var ht = $(window).height();
		$('section').height(ht);
	});
	
	$(window).on('scroll',function(){
		var ht = $(window).height();
		var scroll = $(window).scrollTop();
		var i = $(this).index();

		var size = $('section').size();
		for(i=0; i<4; i++){
			if(scroll>=ht*i && scroll<ht*(i+1)){
				$('#menu li').removeClass();
				$('#menu li').eq(i).addClass('on');
			}
		};

	}); */
	$("section").mousewheel(function(event, d){
		if(d>0){
			var s = $(window).scrollLeft();
			s-=1440; //이게 스크롤 올린거 
		}else if(d<0){ //이게 스크롤 내린거
			var s = $(window).scrollLeft();
			s+=1440;
		}
		$("html, body").stop().animate({
				"scrollLeft":s
		},2000);
	});
});














