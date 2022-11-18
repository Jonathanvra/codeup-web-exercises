"use strict";
(function() {

	let mainHeader = document.getElementById("main-header");

	function changeToTeal() {
		this.style.color = '#008080';
	}
	mainHeader.addEventListener("click", changeToTeal);
		this.removeEventListener("click", changeToTeal);

	let subHeader = document.getElementById("sub-header");

	function changeToRed() {
		this.style.color = '#ff2a04';
	}
	subHeader.addEventListener("click", changeToRed);
}) ();