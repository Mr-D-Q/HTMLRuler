function setRulerColor(color){
	$("div.RulerTop").css("background",color);
	$("div.RulerLeft").css("background",color);
}

function setButtonColor(color){
	$("div.RulerButton").css("background",color);
}

function RulerResize(RulerSize){
	$("div.RulerButton").width(RulerSize);
	$("div.RulerButton").height(RulerSize);
	$("div.RulerTop").width($(window).width() - RulerSize);
	$("div.RulerTop").height(RulerSize);
	$("div.RulerTop").offset({top: 0 , left: RulerSize});
	$("div.RulerLeft").width(RulerSize);
	$("div.RulerLeft").height($(window).height() - RulerSize);
	$("div.RulerLeft").offset({top: RulerSize , left: 0});
	return true;
}


function showCursorPad(X,Y){
	$("span#spXvalue").text(X - RulerSize);
	$("span#spYvalue").text(Y - RulerSize);
	if (X > ($(window).width() - $("div.CursorPad").width() - RulerSize)) {X-=$("div.CursorPad").width() + RulerSize;}
	if (Y > ($(window).height() - $("div.CursorPad").height() - RulerSize)) {Y-=$("div.CursorPad").height() + RulerSize;}
	$("div.CursorPad").offset({left: X, top: Y});
}

function GraduationInitialize(){
	
}














//Switch ON/OFF the PageRuler when RulerButton clicked
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

//Show Lines when mouse move in the document
$(function(){
	$("div.CursorCross").mouseover(function(e){
		$("div.Lines").show();
	});
});


//Change position of lines while mouse move
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