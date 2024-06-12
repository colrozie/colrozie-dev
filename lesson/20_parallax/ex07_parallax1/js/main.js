$(function(){
    var section = $('#contents > .parallax > div'),
		sectionInfo = [],
		objectInfo = [];
		
	section.each(function(i){
		var tg = $(this);
		sectionInfo.push(tg.offset().top);
		objectInfo.push([]); //2차원 배열 집안에 집
		var child = tg.children(); //10,7,3
		child.each(function(j){
			var t = $(this);
			objectInfo[i][j] = t.position().top; //위치값
		});
		// var upBtn = tg.find('.arrow > a:eq(0)');
		// var downBtn = tg.find('.arrow > a:eq(1)');
		
		// upBtn.click(function(e){
			// e.preventDefault();
			// if(i == 0){
				// return;
			// }else{
				// move(i-1);
			// }
		// });
		// downBtn.click(function(){
			// e.preventDefault();
			// if(i == sectionInfo.length - 1){
				// return;
			// }else{
				// move(i+1);
			// }
		// });
		
		// function move(){
			// var tt = sectionInfo[i];
			// $('html, body').stop().animate({scrollTop:tt},600,'easeOutCubic');
		// };
	});	
	// console.log(objectInfo);
	section.css({position:'fixed'});

	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		section.each(function(i){
			var tg = $(this);
			var tt = -1 * sct + sectionInfo[i]; //top값
			
			if(sct > sectionInfo[i]) tt*=0.5; //tt = tt*0.5; 사라져가는 섹션의 스크롤 속도
			tg.css('top',tt);
			
			var child = tg.children();
			child.each(function(j){
				var t = $(this);
				var start = sectionInfo[i];
				var end = sectionInfo[i+1];
				if(!end) end = $(document).height();
				var min = objectInfo[i][j];
				var max = objectInfo[i][j] + j*200 + 100; // 움직일 거리
				var objT = (sct-start) * (max-min) / (end-start) + min;
				t.css({top:objT});
			});
		});
	});
});
















