$(function(){
	/* alert('a'); */
	//팝업
	$('.board ul li').click(function(){
		$('.pop_up').stop(true, true).fadeIn();
	});
	$('button').click(function(){
		$('.pop_up').stop(false, false).fadeOut();
	});
	
	//메뉴
	var menu = $('.nav>ul>li');
	var sub = $('.nav .sub');
	
	menu.hover(
		function(){
			$(this).find(sub).stop(true, true).slideDown(500);
		},
		function(){
			$(this).find(sub).stop(false, false).slideUp(500);
		}
	);
	
	
	//배너
	var banner = $('#banner ul li');
	var slide_interval;

	$('#banner ul li:gt(0)').hide();
	
	function fade(){
		slide_interval = setInterval(function(){
			$('#banner ul li:first-Child').fadeOut().appendTo('#banner ul');
			$('#banner ul li:first-Child').fadeIn();
		},1000);
	};
	fade();
	
	banner.hover(
		function(){
			clearInterval(slide_interval);
		},
		function(){
			fade();
		}
	);
});
















