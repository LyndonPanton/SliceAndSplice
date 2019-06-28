"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	// Edit me (array insert)
	let arr1 = [64, 125, 216, 343, 512];
	// Edit me (array insert to)
	let arr2 = [0, 1, 8, 27, 729, 1000];
	// Edit me (index to insert at)
	let n = 4;

	function splicer(first, second, insertion) {
		let result = second.slice();
		result.splice(insertion, 0, ...arr1);

		console.log(result);
		return result;
	}

	splicer(arr1, arr2, n);
};