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

function RulePageResize(){
	$("body").css("margin-left",RulerSize);
	$("body").css("margin-top",RulerSize);
	$("div.RulePage").width($(window).width() - RulerSize);
	$("div.RulePage").height($(window).height() - RulerSize);
	$("div.CursorCross").width($(window).width() - RulerSize);
	$("div.CursorCross").height($(window).height() - RulerSize);
	}
	
function LineInitialize(LineWidth,LineType,LineColor){
	$("div.Lines").css("border-right",LineWidth+" "+LineType+" "+LineColor);
	$("div.Lines").css("border-bottom",LineWidth+" "+LineType+" "+LineColor);
	}

function showCursorPad(X,Y){
	$("span#spXvalue").text(X - RulerSize);
	$("span#spYvalue").text(Y - RulerSize);
	if (X > ($(window).width() - $("div.CursorPad").width() - RulerSize)) {X-=$("div.CursorPad").width() + RulerSize;}
	if (Y > ($(window).height() - $("div.CursorPad").height() - RulerSize)) {Y-=$("div.CursorPad").height() + RulerSize;}
	$("div.CursorPad").offset({left: X, top: Y});
}

function GraduationInitialize(){
	//set a new CSS rule of the interval of each short graduation.
	if(document.styleSheets[0].cssRules){
		document.styleSheets[0].insertRule("div.RulerLeft div{height:"+(unit*longOfshort-1)+"px;}", document.styleSheets[0].cssRules.length); 
		document.styleSheets[0].insertRule("div.RulerTop div{width:"+(unit*longOfshort-1)+"px;}", document.styleSheets[0].cssRules.length); 
	}
	else{
		document.styleSheets[0].addRule("div.RulerLeft div","height:"+(unit*longOfshort-1)+"px");
		document.styleSheets[0].addRule("div.RulerTop div","width:"+(unit*longOfshort-1)+"px");
	}
}

function GraduationPaint(){
}