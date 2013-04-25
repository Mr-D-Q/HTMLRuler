//the Size of Rulers
var RulerSize=20;

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

$(document).ready(function(){
	setButtonColor("#ccc");
	setRulerColor("#eee");
	RulePageResize();
	RulerResize(RulerSize);
	LineInitialize("1px","solid","#08f");
});