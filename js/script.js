$(function(){
	// 프로필 탭메뉴
	var btn = $('.buttons div');
	var p_con = $('.profile_con>div');
	p_con.hide();
	p_con.eq(0).show();

	btn.click(function(){
		var tg = $(this);
		var i = tg.index();
		btn.removeClass('active');
		tg.addClass('active');	
		p_con.css('display','none');
		p_con.eq(i).css('display','block');		
	});
	
	//HTML5 메뉴
	var menu = $('.side_menu ul li');
	var con = $('.right_bot');
	con.hide();
	con.eq(0).show();
	
	menu.click(function(){
		var tg = $(this);
		var i = tg.index();
		menu.removeClass('active');
		tg.addClass('active');	
		con.css('display','none');
		con.eq(i).css('display','block');
	});

	//tool tip
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	var a_title = $('[title]');
	function updateBalloonPosition(x, y){
		balloon.css({left:x+15,top:y+20});
	};
	function showBalloon(){
		balloon.stop().css('opacity',0).show().animate({opacity:1},200);
	};
	function hideBalloon(){
		balloon.stop().css('opacity',1).show().animate({opacity:0},100,function(){hide()});
	};
	
	a_title.each(function(){
		var element = $(this);
		var text = element.attr('title');
		element.attr('title','');
		element.hover(
			function(event){
				balloon.text(text);
				updateBalloonPosition(event.pageX,event.pageY);
				showBalloon();
			},
			function(){
				hideBalloon();
			}
		);
		
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX,event.pageY);
		});
	});
});
























































