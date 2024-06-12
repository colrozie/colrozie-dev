$(function(){
	activateScene2();
	function activateScene2(){
		var $content = $('#scene-2-content');
		var $charts = $content.find('.chart');
		$content.stop(true).animate({right: 0},1200,'easeInOutQuint');
		
		$charts.each(function(){
			var $chart = $(this), //순환하는 각각의 차트
			$circleLeft = $chart.find('.left .circle-mask-inner').css({transform:'rotate(0)'}),
			$circleRight = $chart.find('.right .circle-mask-inner').css({transform:'rotate(0)'}),
			$percentNumber = $chart.find('.percent-number'),
			percentData = $percentNumber.text(); //변수 총 5개 text, attr 은 제이쿼리 객체에서 파생됐어도 객체가 아니고 문자열이 담긴다
			
			$percentNumber.text(0); //reset
			$({percent:0}).delay(1200).animate( //percent 배열 변수
				{percent:percentData},
				{
					duration:1500,
					progress:function(){
						var now = this.percent,
						deg = now * 360 / 100, //각도로 변환
						degRight = Math.min(Math.max(deg,0),180),
						degLeft = Math.min(Math.max(deg-180,0),180);
						$circleRight.css({transform:'rotate('+degRight+'deg)'});
						$circleLeft.css({transform:'rotate('+degLeft+'deg)'});
						$percentNumber.text(Math.floor(now));
					}
				}
			);
		});
	};
});














