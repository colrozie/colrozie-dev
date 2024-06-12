$(function(){
	//alert();
	var tab = $('#wrap #tab > li');
	var content = $('#content > div');
	tab.on('click',function(e){
		e.preventDefault();
		var tg = $(this);
		var tc = tg.find('>a');
		tab.find('>a').removeClass('on');
		tc.addClass('on');
		i = tg.index();
		content.css('display','none');
		content.eq(i).css('display','block');
	});
	
	var urls = [
		'http://www.naver.com',
		'http://www.daum.net',
		'http://yomyomi.dothome.co.kr',
		'http://private.dothome.co.kr/diary/'
	];
	var el = $('#content > div > img');
	
	el.on({
		mouseover:function(){
			var tg = $(this);
			tg.addClass('on');
		},
		mouseout:function(){
			var tg = $(this);
			tg.removeClass('on');
			
		},
		click:function(e){
			e.preventDefault();
			var tg = $(this);
			var i = tg.parent().index();
			var linkURL = urls[i];
			window.open(linkURL); //새 탭으로 열림
			//location.href = linkURL;
		}
	});
});