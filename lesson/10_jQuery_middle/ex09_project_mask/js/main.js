$(function(){
	activateScene2();
	function activateScene2(){
		var $content = $('#scene-2-content');
		var $charts = $content.find('.chart');
		$content.stop(true).animate({right: 0},1200,'easeInOutQuint');
		
		$charts.each(function(){
			var $chart = $(this), //��ȯ�ϴ� ������ ��Ʈ
			$circleLeft = $chart.find('.left .circle-mask-inner').css({transform:'rotate(0)'}),
			$circleRight = $chart.find('.right .circle-mask-inner').css({transform:'rotate(0)'}),
			$percentNumber = $chart.find('.percent-number'),
			percentData = $percentNumber.text(); //���� �� 5�� text, attr �� �������� ��ü���� �Ļ��ƾ ��ü�� �ƴϰ� ���ڿ��� ����
			
			$percentNumber.text(0); //reset
			$({percent:0}).delay(1200).animate( //percent �迭 ����
				{percent:percentData},
				{
					duration:1500,
					progress:function(){
						var now = this.percent,
						deg = now * 360 / 100, //������ ��ȯ
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














