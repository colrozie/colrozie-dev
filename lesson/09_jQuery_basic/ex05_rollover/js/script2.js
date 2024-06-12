$(function(){
	/* alert('a'); */
	/* var a = $(''); */
	$('.rollover').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		// src_off = iimages/menu01_off.png
		var src_on = src_off.replace('_off','_on');
		// src_on = iimages/menu01_on.png	
		
		$('<img />').attr('src',src_on); // 동적생성(HTML태그) > 이미지를 미리 쿠키로 저장해서 보여주기 때문에 엑박이 안 뜨며 빠름
		
		a.on('mouseenter focus',function(){
			img.attr('src',src_on);
		});
		a.on('mouseleave blur',function(){
			img.attr('src',src_off);
		});
		
	});
});