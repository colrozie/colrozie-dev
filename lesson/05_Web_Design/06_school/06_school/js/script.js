$(function(){
	/* 팝업 */
	var popup = $('.modal');
	var pop_open = $('.popup');
	var pop_close = $('.modal_up .btn');
	pop_open.click(function(){
		popup.fadeIn();
	});
	pop_close.click(function(){
		popup.fadeOut();
	});

	/* 메뉴 */
	var menu = $('.nav>li');
	var depth2 = $('.nav>li .sub');
	menu.mouseenter(function(){
		$(this).find('>.sub').stop(true,true).slideDown();
	});
	menu.mouseleave(function(){
		$(this).find('>.sub').stop(false,false).slideUp();
	});

	/* 이미지슬라이드 */
	var timer;
	$('.imgslide a:gt(0)').hide();
	function stoptimer(){
		timer=setInterval(function(){
			$('.imgslide a:first-child').fadeOut().appendTo('.imgslide');
			$('.imgslide a:first-child').fadeIn();
		},1000);		
	};
	stoptimer();
	
	function move(){
		
	};
	
	$('.imgslide a').hover(
		function(){
			clearInterval(timer);
		},
		function(){
			stoptimer();
		}
	);

    $('.tabmenu>li>a').click(function(){
		/* $(this).parent().addClass('active').siblings().removeClass('active'); */
		$('.tabmenu>li').removeClass('active');
		$(this).parent().addClass('active');
        return false;
    });	
	
});





























