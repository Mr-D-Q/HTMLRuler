function setRulerColor(color){
	$("div.RulerTop").css("background",color);
	$("div.RulerLeft").css("background",color);
}

function setMenuColor(color){
	$("div.RulerMenu").css("background",color);
}

function RulerResize(RulerSize)
{
	$("div.RulerMenu").width(RulerSize);
	$("div.RulerMenu").height(RulerSize);
	$("div.RulerTop").width($(window).width() - RulerSize);
	$("div.RulerTop").height(RulerSize);
	$("div.RulerTop").offset({top: 0 , left: RulerSize});
	$("div.RulerLeft").width(RulerSize);
	$("div.RulerLeft").height($(window).height() - RulerSize);
	$("div.RulerLeft").offset({top: RulerSize , left: 0});
	return true;
}

//Switch ON/OFF the PageRuler
$(function(){
	$("div.RulerMenu").mouseup(function(e){
		switch(e.which){
			case 1:
				if($("div.CursorCross").css("display")=="none"){
					$("div.CursorCross").show();
					setMenuColor("#0cf")
					setRulerColor("#cff");
				}
				else{
					$("div.CursorCross").hide();
					setMenuColor("#ccc");
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
			$("div.Lines").hide();
		}
		else{
			$("div.Lines").width(e.pageX);
			$("div.Lines").height(e.pageY);
		}
	});
	$("div.Lines").mousemove(function(e){
		if(e.pageX < RulerSize || e.pageY < RulerSize){
			$(this).hide();
		}
		else{
			$(this).width(e.pageX);
			$(this).height(e.pageY);
		}
	});
});