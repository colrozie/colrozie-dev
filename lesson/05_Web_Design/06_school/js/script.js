$(function(){
	/* alert('a'); */
	/* nav메뉴 */
	var depth1 = $('.nav>ul>li');
	var depth2 = $('.nav .sub');
	depth2.hide();
	
	depth1.mouseover(function(){
	$(this).find(depth2).stop(true, true).slideDown(500);
	}).mouseout(function(){
	$(this).find(depth2).stop(false, false).slideUp(500);
	});
	
	/* tab메뉴 */
	var tab = $('.content1 .tab_menu li');
	var content = $('.tab_con > div');
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

	/* 팝업 */
	var pop = $('.pop');
	$('.popup').click(function(){
		pop.fadeIn(200);
	});
	$('.pop button').click(function(){
		pop.fadeOut(200);
	});
	
	/* 이미지 슬라이드 */
	    var currentIndex = 0;
    
    setInterval(function(){
        if(currentIndex < 2){
            currentIndex ++;
        } else {
            currentIndex = 0;
        } 
        
        $(".slide").eq(currentIndex).siblings().fadeOut();
        $(".slide").eq(currentIndex).fadeIn();
        
    },1500);
});


















