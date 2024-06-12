$(function(){
    //alert('a');
	var current = 1; //현재 페이지 번호
	var thumbListSize = 6;
	var thumbnail = $('#thumbnail');
	var prev = thumbnail.find('>.left');
	var next = thumbnail.find('>.right');
	var container = thumbnail.find('>.container > ul'); //2304px 움직일 대상
	var containWidth = thumbnail.find('> .container').width();
	//console.log(containWidth);
	var thumb = container.find('>.thumb');
	var maxSize = thumb.size();
	//18
	var image = $('#gallery #image > p');
	
	next.on('click',function(){
		if(current<maxSize/thumbListSize - 1){current++}else{alert('마지막 페이지입니다');};
		//console.log(current);
		//현재 < 18/6 -1
		listMove();
	});
	prev.on('click',function(){
		if(current>0){current--}else{alert('처음 페이지입니다');};
		//console.log(current);
		//현재 > 0
		listMove();
	});
	
	function listMove(){
		var tl = containWidth * current * -1;
		container.stop().animate({left:tl},{duration:400,easing:'easeOutCubic'});
	};
	listMove();
	
	thumb.on('click',function(){
		image.css('display','none');
		var i = $(this).index();
		image.eq(i).css('display','block');
	});
});


