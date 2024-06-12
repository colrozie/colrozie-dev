$(function(){
	//배너
	var banner = $('#banner ul li');
	var current = 0;
	var timer;
	
	function slide(){
		timer = setInterval(function(){
			var prev = banner.eq(current);
			current++;
			move(prev,0,'-100%');
			
			if(current==banner.size()){current=0};
			
			var next = banner.eq(current);
			move(next,'100%',0);
			
		},1000);
	};
	
	function move(tg,start,end){
		tg.css('left',start).stop().animate({left:end});
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

$(function(){
	//배너 2
	var banner2 = $('#banner2 ul li');
	var current = 0;
	var timer;
	
	function slide(){
		timer = setInterval(function(){
			var prev = banner2.eq(current);
			current++;
			move(prev,0,'100%');
			
			if(current==banner2.size()){current=0};
			
			var next = banner2.eq(current);
			move(next,'-100%',0);
			
		},1000);
	};
	
	function move(tg,start,end){
		tg.css('left',start).stop().animate({left:end});
	};
	
	banner2.hover(
		function(){
			clearInterval(timer);
		},
		function(){
			slide();
		}
	);
	
	slide();
});

$(function(){
	//배너 3
	var banner3 = $('#banner3 ul li');
	var current = 0;
	var timer;
	
	function slide(){
		timer = setInterval(function(){
			var prev = banner3.eq(current);
			current++;
			move(prev,0,'100%');
			
			if(current==banner3.size()){current=0};
			
			var next = banner3.eq(current);
			move(next,'-100%',0);
			
		},1000);
	};
	
	function move(tg,start,end){
		tg.css('top',start).stop().animate({top:end});
	};
	
	banner3.hover(
		function(){
			clearInterval(timer);
		},
		function(){
			slide();
		}
	);
	
	slide();
});

$(function(){
	//배너 4
	var banner4 = $('#banner4 ul li');
	var current = 0;
	var timer;
	
	function slide(){
		timer = setInterval(function(){
			var prev = banner4.eq(current);
			current++;
			move(prev,0,'-100%');
			
			if(current==banner4.size()){current=0};
			
			var next = banner4.eq(current);
			move(next,'100%',0);
			
		},1000);
	};
	
	function move(tg,start,end){
		tg.css('top',start).stop().animate({top:end});
	};
	
	banner4.hover(
		function(){
			clearInterval(timer);
		},
		function(){
			slide();
		}
	);
	
	slide();
});

$(function(){
	//배너5
	var fade;
	$('#banner5 ul li:gt(0)').hide();
	
	function slide(){
		fade = setInterval(function(){
			$('#banner5 ul li:first-child').fadeOut().appendTo('#banner5 ul');
			$('#banner5 ul li:first-child').fadeIn();
		},1000);
	};
	
	slide();
	
	$('#banner5 ul li').hover(
		function(){
			clearInterval(fade);
		},
		function(){
			slide();
		}
	);
});













