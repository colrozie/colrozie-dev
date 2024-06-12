$(function(){
	$('.animal').each(function(){
		var name = $(this).text();
		alert(name);
	});
	
});
/* 메모리에 상주하며 each는 이벤트 메소드가 아니다 순환 */


