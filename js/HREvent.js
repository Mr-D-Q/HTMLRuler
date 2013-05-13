
//Initialize
$(document).ready(function(){
	RulePageResize();
	RulerInitialize(RulerSize,RulerColor_dark,ButtonColor_dark);
	LineInitialize(GraWeight+"px",GraType,LinesColor);
	GraduationInitialize(GraWeight+"px",GraType,GraColor);
	GraduationPaint();
});

//When the document loaded, repaint the rulers.
$("div.RulePage").load("http://www.baidu.com/index.htm",function(){
	window.alert("Finish!");
});


//Switch ON/OFF the PageRuler when RulerButton clicked.
$(function(){
	$("div.RulerButton").mouseup(function(e){
		switch(e.which){
			case 1:
				if($("div.CursorCross").css("display")=="none"){
					$("div.CursorCross").show();
					$("div.RulerTop").css("background",RulerColor);
					$("div.RulerLeft").css("background",RulerColor);
					$("div.RulerButton").css("background",ButtonColor);
				}
				else{
					$("div.CursorCross").hide();
					$("div.Lines").hide();
					$("div.RulerTop").css("background",RulerColor_dark);
					$("div.RulerLeft").css("background",RulerColor_dark);
					$("div.RulerButton").css("background",ButtonColor_dark);
				}
				break;
			case 3:
				$.dialog({
					width: '750px', 
					height: '450px',
					title: '',
					content: 'url:http://www.126.com',
					lock:true,
					button: [ 
							 { 
								 name: '确认',
								 callback: function () {
									 var url = "http://trade.myfund.com/kfit/page/common/foward.jsp?business=039&fundcode=";
									 window.open(url + code);
								 },
								 focus: true 
							 }       
						 ]  
				});
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
		if (e.pageX >= RulerSize){
			$("div.Lines").width(e.pageX);
		}
		else{
			showCursorPad(RulerSize,e.pageY);
			$("div.Lines").width(RulerSize);
		}
		if (e.pageY >= RulerSize){
			$("div.Lines").height(e.pageY);
		}
		else{
			showCursorPad(e.pageX,RulerSize);
			$("div.Lines").height(RulerSize);
		}
		if(e.pageX >= RulerSize && e.pageY >= RulerSize){
			showCursorPad(e.pageX,e.pageY);
		}

	});
});