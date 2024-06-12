	/* 	메인 슬라이드  */
	$('.main_slide_img').width();
		
	var main_slide_img = $('.slide_panel_inner');
	var text_banner = $('.slider_text'); 
	var slide_control_btn = $('.control_button');
	var current = 0;
	var slide_timer;
	var slide_click_time = 'no' // 인디케이터 너무 빠른 연속 클릭 방지하는 변수
	var prev_click_current;

 	slide_control_btn.click(function(){
		if(slide_click_time=='yes'){
			return;
		} else{
		slide_click_time='yes'
		setTimeout (function(){slide_click_time="no"},300);
		click_current = $(this).index();
		clearInterval(slide_timer);
		click_slide_total(click_current, prev_click_current);
		slide_interval();
		if(slide_play=='no'){
			slide_play='yes'
			slide_play_btn.css('background','url(images/main_slide/main-autoplay-stop.png) no-repeat');
		};	
		}
	});
	
  	var slide_play = 'yes'
	var slide_play_btn = $('.control_play')
	
	function slide_play_func(){
		if(slide_play == 'yes'){
			clearInterval(slide_timer);
			slide_play = 'no'
			slide_play_btn.css('background','url(images/main_slide/main-autoplay-play.png) no-repeat');
		}else if (slide_play == 'no'){
			slide_interval();
			slide_play = 'yes'
			slide_play_btn.css('background','url(images/main_slide/main-autoplay-stop.png) no-repeat');
		}		
	};
	
	slide_play_btn.click(function(){
		slide_play_func();
	});
	
 	$('.control_left').click(function(){
		var btn_current = current-1
		if(btn_current<0){btn_current=slide_control_btn.size()-1;};
		slide_control_btn.eq(btn_current).trigger('click');
		if(slide_play=='no'){
			slide_play='yes'
			slide_play_btn.css('background','url(images/main_slide/main-autoplay-stop.png) no-repeat');
		};	
	}); 
 	$('.control_right').click(function(){
		var btn_current = current+1
		if(btn_current>=slide_control_btn.size()){btn_current=0;};
		slide_control_btn.eq(btn_current).trigger('click');
		if(slide_play=='no'){
			slide_play='yes'
			slide_play_btn.css('background','url(images/main_slide/main-autoplay-stop.png) no-repeat');
		};	
	}); 
	
	$('.slide_text_anchor').hover(
		function(){
			clearInterval(slide_timer);
			slide_play = 'no';
			slide_play_btn.css('background','url(images/main_slide/main-autoplay-play.png) no-repeat');
		},
		function(){
			slide_interval();
			slide_play = 'yes';
			slide_play_btn.css('background','url(images/main_slide/main-autoplay-stop.png) no-repeat');
		}
	);
	
	function slide_total(){
		var prev_img = main_slide_img.eq(current);
		var slide_img_width = main_slide_img.width();
 		var prev_text_banner = text_banner.eq(current);
		move_banner(prev_img,'0%','-100%',0,162);
		setTimeout(function(){
			prev_img.css('z-index','2');
			prev_img.hide();	
			},500);
		fadein_banner(prev_text_banner,1,0,slide_img_width);
		slide_control_btn.eq(current).removeClass('active_btn').stop().animate({'width':'10px'},300);
		current++;
		if(current >= main_slide_img.size()){current=0;};
		var next_img = main_slide_img.eq(current);
		var next_text_banner=text_banner.eq(current);
		next_img.show();
		move_banner(next_img,'100%','0%',-162,0);
		next_img.css('z-index','3');
		fadein_banner(next_text_banner,0,1,slide_img_width);
		slide_control_btn.eq(current).addClass('active_btn').stop().animate({'width':'30px'},300);
	}

 	function click_slide_total(click_current, prev_click_current){
		if(prev_click_current){current=prev_click_current};
		if(current==click_current){return;}
		else {
		var prev_img = main_slide_img.eq(current);
		var slide_img_width = main_slide_img.width();
		var prev_text_banner = text_banner.eq(current);
		prev_img.show();
		move_banner(prev_img,'0%','-100%',0,162);
		setTimeout(function(){
			prev_img.css('z-index','2');
			prev_img.hide();
			},500);
		fadein_banner(prev_text_banner,1,0,slide_img_width);
		slide_control_btn.eq(current).removeClass('active_btn').stop().animate({'width':'10px'},300);
		var next_img = main_slide_img.eq(click_current);
		var next_text_banner=text_banner.eq(click_current);
		next_img.show();
		move_banner(next_img,'100%','0%',-162,0);
		next_img.css('z-index','3');
		fadein_banner(next_text_banner,0,1,slide_img_width);
		slide_control_btn.eq(click_current).addClass('active_btn').stop().animate({'width':'30px'},300);
		prev_click_current = click_current;
		current=click_current;
		}
	} 
	
	function slide_interval(){
		slide_timer = setInterval(function(){
				slide_total();
			},2000);		
	}
	slide_interval();

	function move_banner (tg,start,end,top_start,top_end){
 		tg.css({left:start, top:top_start}).stop().animate({left:end, top:top_end},500);
	};
	function fadein_banner (tg,op1,op2,img_width){		
		if(op1==1){
			tg.css({opacity:op1, left:0}).stop().animate({left:-img_width, opacity:op2},500,function(){
				tg.css('display','none');
			});
		} else if(op1==0){
			tg.css('display','block')
			tg.css({opacity:op1,left:img_width}).stop().animate({left:'0', opacity:op2},500);
		};
		
	};	