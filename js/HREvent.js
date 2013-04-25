
//Initialize
$(document).ready(function(){
	setButtonColor("#ccc");
	setRulerColor("#eee");
	RulePageResize();
	RulerResize(RulerSize);
	LineInitialize("1px","solid","#08f");
	GraduationInitialize();
});

//Switch ON/OFF the PageRuler when RulerButton clicked.
$(function(){
	$("div.RulerButton").mouseup(function(e){
		switch(e.which){
			case 1:
				if($("div.CursorCross").css("display")=="none"){
					$("div.CursorCross").show();
					setButtonColor("#0cf")
					setRulerColor("#cff");
				}
				else{
					$("div.CursorCross").hide();
					$("div.Lines").hide();
					setButtonColor("#ccc");
					setRulerColor("#eee");
				}
				break;
		}
	});
});

//Show Lines when mouse move in the document.
$(function(){
	$("div.CursorCross").mouseover(function(e){
		$("div.Lines").show();
	});
});

//Change position of lines while mouse move.
$(function(){
	$("div.CursorCross").mousemove(function(e){
		if(e.pageX < RulerSize || e.pageY < RulerSize){
			//$("div.Lines").hide();
		}
		else{
			$("div.Lines").width(e.pageX);
			$("div.Lines").height(e.pageY);
			showCursorPad(e.pageX , e.pageY);
		}
	});
	$("div.Lines").mousemove(function(e){
		if(e.pageX < RulerSize || e.pageY < RulerSize){
			//$(this).hide();
		}
		else{
			$(this).width(e.pageX);
			$(this).height(e.pageY);
			showCursorPad(e.pageX , e.pageY);
		}
	});
});