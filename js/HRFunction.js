
function RulerInitialize(rulerSize,rulerColor,buttonColor){
	$("div.RulerButton").css("background",buttonColor);
	$("div.RulerButton").width(rulerSize);
	$("div.RulerButton").height(rulerSize);
	$("div.RulerTop").css("background",rulerColor);
	$("div.RulerTop").width($(window).width() - rulerSize);
	$("div.RulerTop").height(rulerSize);
	$("div.RulerTop").offset({top: 0 , left: rulerSize});
	$("div.RulerLeft").width(rulerSize);
	$("div.RulerLeft").css("background",rulerColor);
	$("div.RulerLeft").height($(window).height() - rulerSize);
	$("div.RulerLeft").offset({top: rulerSize , left: 0});
}

function RulerResize(topWidth,leftHeight){
	$("div.RulerTop").width(topWidth - RulerSize);
	$("div.RulerLeft").height(leftHeight - RulerSize);
}

function RulePageResize(){
	$("body").css("margin-left",RulerSize);
	$("body").css("margin-top",RulerSize);
	$("div.RulePage").width($(window).width() - RulerSize);
	$("div.RulePage").height($(window).height() - RulerSize);
	$("div.CursorCross").width($(window).width());
	$("div.CursorCross").height($(window).height());
	}
	
function LineInitialize(lineWidth,lineType,lineColor){
	$("div.Lines").css("border-right",lineWidth+" "+lineType+" "+lineColor);
	$("div.Lines").css("border-bottom",lineWidth+" "+lineType+" "+lineColor);
	}

function showCursorPad(x,y){
	$("span#spXvalue").text(x - RulerSize);
	$("span#spYvalue").text(y - RulerSize);
	if (x > ($(window).width() - $("div.CursorPad").width() - RulerSize)) {x-=$("div.CursorPad").width() + RulerSize;}
	if (y > ($(window).height() - $("div.CursorPad").height() - RulerSize)) {y-=$("div.CursorPad").height() + RulerSize;}
	$("div.CursorPad").offset({left: x, top: y});
}

function GraduationInitialize(width,linetype,color){
	//set a new CSS rule of the interval of each short graduation.
	if(document.styleSheets[0].cssRules){
		document.styleSheets[0].insertRule("div.RulerLeft div{height:"+(unit*longOfshort-2*GraWeight)+"px;}", document.styleSheets[0].cssRules.length); 
		document.styleSheets[0].insertRule("div.RulerTop div{width:"+(unit*longOfshort-2*GraWeight)+"px;}", document.styleSheets[0].cssRules.length); 
		document.styleSheets[0].insertRule("div.RulerLeft div{border-top:"+width+" "+linetype+" "+color+";color:"+color+";}", document.styleSheets[0].cssRules.length); 
		document.styleSheets[0].insertRule("div.RulerTop div{border-left:"+width+" "+linetype+" "+color+";color:"+color+";}", document.styleSheets[0].cssRules.length); 
	}
	else{
		document.styleSheets[0].addRule("div.RulerLeft div","height:"+(unit*longOfshort-2*GraWeight)+"px");
		document.styleSheets[0].addRule("div.RulerTop div","width:"+(unit*longOfshort-2*GraWeight)+"px");
		document.styleSheets[0].addRule("div.RulerLeft div","border-top:"+width+" "+linetype+" "+color);
		document.styleSheets[0].addRule("div.RulerTop div","border-left:"+width+" "+linetype+" "+color);
		document.styleSheets[0].addRule("div.RulerLeft div","color:"+color);
		document.styleSheets[0].addRule("div.RulerTop div","color:"+color);
	}
}

function GraduationPaint(){
	//Paint Graduation Top
	$("div.RulerTop").empty();
	for(var i=0 ; i<(($("div.RulerTop").width() - GraWeight)/unit) ; i++){
		if (i % longOfshort == 0){
			$("div.RulerTop").append("<div id='GraTop"+unit+"_"+i+"' class='GraLong'></div>");
			$("div#GraTop"+unit+"_"+i).text(i*unit);
			$("div#GraTop"+unit+"_"+i).css("font-size",GraFontSize+"px");
			$("div#GraTop"+unit+"_"+i).css("line-height",RulerSize*1.4+"px");
		}
		else{
			$("div.RulerTop").append("<div id='GraTop"+unit+"_"+i+"' class='GraShort'></div>");
		}
		$("div#GraTop"+unit+"_"+i).offset({left:i*unit+RulerSize});	
	}
	//Paint Graduation Left
	$("div.RulerLeft").empty();
	for(var i=0 ; i<(($("div.RulerLeft").height() - GraWeight)/unit) ; i++){
		if (i % longOfshort == 0){
			$("div.RulerLeft").append("<div id='GraLeft"+unit+"_"+i+"' class='GraLong'></div>");
			$("div#GraLeft"+unit+"_"+i).text(i*unit);
			$("div#GraLeft"+unit+"_"+i).css("font-size",GraFontSize+"px");
			$("div#GraLeft"+unit+"_"+i).css("line-height",GraFontSize+"px");
			$("div#GraLeft"+unit+"_"+i).css("padding-left",($("div#GraLeft"+unit+"_"+i).width()-GraFontSize)+"px");
			$("div#GraLeft"+unit+"_"+i).width($("div#GraLeft"+unit+"_"+i).css("font-size"));
		}
		else{
			$("div.RulerLeft").append("<div id='GraLeft"+unit+"_"+i+"' class='GraShort'></div>");
		}
		$("div#GraLeft"+unit+"_"+i).offset({top:i*unit+RulerSize});	
	}
}