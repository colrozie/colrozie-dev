$(function(){
    // alert('a');
    //팝업
    var popup = $('.pop');
    var close = $('.pop_wrap .btn');

    $('.pop_open').click(function(){
        $(popup).fadeIn();
    });
    close.click(function(){
        $(popup).fadeOut();
    });

    //메뉴
    var menu = $('.nav>ul>li');
    var depth2 = $('.nav .sub');

    menu.hover(
        function(){
            $(this).find(depth2).stop(true, true).slideDown(500);
        },
        function(){
            $(this).find(depth2).stop(false, false).slideUp(500);
        }
    );

    //탭메뉴
    var tab = $('.tab_menu ul li');
	var content = $('.tab_contents > div');
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
        },2000);
    };

    function move(tg,start,end){
        tg.css('left',start).stop().animate({left:end},1200);
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