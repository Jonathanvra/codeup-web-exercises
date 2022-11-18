"use strict";
$(function() {
	// alert($("#codeup").html());
	// alert($(".main").html());

	$(".codeup").css("border", "1px solid red");
	$("li").css("font-size", "20px").css("background", "yellow");
	$("h1").css("background", "orange");
	$("p").css("background", "orange");
	alert($("h1").html());

	$("h1, p, li").css("background","green");
});