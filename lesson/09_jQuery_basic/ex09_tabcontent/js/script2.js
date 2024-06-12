$(function(){
	/* alert('a'); */
	$('.tabSet').each(function(){
		var topDiv = $(this);
		var anchors = topDiv.find('ul.tabs a');
		var panelDivs = topDiv.find('.panel');	
		var lastAnchor;
		var lastPanel;
		
		anchors.show();
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.attr('href'));
		//제이쿼리 객체로 만들어야 함
		panelDivs.hide();
		lastPanel.show();
		//순서를 잘 지켜야 함 다 닫고 열어야해~
		
		anchors.click(function(e){
			e.preventDefault();
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('href'));
			if(currentAnchor.get(0)===lastAnchor.get(0)){return;};
			// 활성화 된 탭은 다시 동작하지 않도록 끊어줌
			lastPanel.stop(false).slideUp(200,function(){
				lastAnchor.removeClass('on');
				currentAnchor.addClass('on');
				currentPanel.stop(true).slideDown(200);
				lastAnchor = currentAnchor;
				lastPanel = currentPanel;				
			});
			// lastPanel.hide();
			// currentPanel.show();
			// 오류를 잡기 위해 시간은 늘려서 보고 시간을 줄인다.
		});
	});
});

