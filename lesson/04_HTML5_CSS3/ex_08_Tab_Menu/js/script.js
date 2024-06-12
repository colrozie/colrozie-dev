jQuery(document).ready(function(){
	// alert('a');
	$('.item2').hide(); 
	$('.item1').show();
	$('.button1').css('background','orange');
	$('.button1').css('cursor','default');
	$('.button2').css('background','black');	
	$('.button2').css('cursor','pointer');
	
	$('.button2').click(function(){
		$('.item1').hide(); 
		$('.item2').show();
		$('.button2').css('background','orange');
		$('.button2').css('cursor','default');
		$('.button1').css('background','black');	
		$('.button1').css('cursor','pointer');
	});
	
	$('.button1').click(function(){
		$('.item2').hide(); 
		$('.item1').show();
		$('.button1').css('background','orange');
		$('.button1').css('cursor','default');
		$('.button2').css('background','black');	
		$('.button2').css('cursor','pointer');		
	});
});


/* $(); = jQuery객체(목적어) 안에는 선택자(셀렉터)가 옴 .click(); = 메서드 method(함수) */
/* 괄호 안 파라미터(인자) = ('',''); 매개변수 > 두 개면 ~를 ~해라 */
/* function = 기능 파라미터 넣음*/
/* });=내용을 기입*/
/* click = event method */

/* 쓰는법 */
	/* $();
	$('');
	$('.button1');
	$('.button1').click();
	$('.button1').click(function);
	$('.button1').click(function(){});
	$('.button1').click(function(){
		
	});
 */