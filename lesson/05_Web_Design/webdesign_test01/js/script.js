$(document).ready(function(){
	//menu
	var menu1 = $('.nav>ul>li');
	var sub = $('.sub');
	
	menu1.hover(
		function(){
			$(this).find(sub).stop(true, true).slideDown(500);
		},
		function(){
			$(this).find(sub).stop(false, false).slideUp(500);
		}
	);
	//pop
	$('.pop_open').click(function(){
		$('.pop').fadeIn(500);
		return false;
	});
	$('.pop .btn').click(function(){
		$('.pop').fadeOut(500);
		return false;
	});
	
	//tab
	var tab = $('.tab_menu ul li');
	var con = $('.contents > div');
	
	tab.click(function(){
		var i = $(this).index();
		con.css('display','none')
		tab.removeClass('active');
		$(this).addClass('active');
		con.eq(i).css('display','block');
		return false;
	});
	
	//slide
	
	var current = 0;
	var banner = $('#banner ul li');
	var timer;
	
	function move(tg,start,end){
		tg.css('top',start).stop().animate({top:end},1000);
	};
	
	function slider(){
		timer = setInterval(function(){
			var prev = banner.eq(current);
			move(prev,'0','100%');
			current++;
			if(current==banner.size()){current=0;}
			
			var next = banner.eq(current);
			move(next,'-100%','0');
		},3000);
	};
	slider();
});






