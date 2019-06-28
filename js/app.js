"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	// Edit me (array insert)
	let arr1 = [64, 125, 216, 343, 512];
	// Edit me (array insert to)
	let arr2 = [0, 1, 8, 27, 729, 1000];
	// Edit me (index to insert at)
	let n = 4;

	function display(results) {
		let d1 = document.getElementById("display-one-value");
		let d2 = document.getElementById("display-two-value");
		let i = document.getElementById("display-index-value");
		let r = document.getElementById("display-three-value");

		d1.textContent = "???";
		d2.textContent = "???";
		i.textContent = "???";

		if (!Array.isArray(results[0]) || !Array.isArray(results[1])) {
			r.textContent = "Both elements must be arrays";
		} else if (!results[0].length || !results[1].length) {
			r.textContent = "Arrays must have values entered";
		} else if (typeof(results[2]) !== "number") {
			r.textContent = "Insertion values must be a number";
		} else {
			d1.textContent = "[" + results[0].join(", ") + "]";
			d2.textContent = "[" + results[1].join(", ") + "]";
			i.textContent = results[2];
			r.textContent = "[" + results[3].join(", ") + "]";
		}
	}

	// Bonus
	function filter(number) {
		return typeof(number) === "number";
	}

	function splicer(first, second, insertion) {
		let firstEdit = first.filter(filter);
		let secondEdit = second.filter(filter);

		let result = secondEdit.slice();
		result.splice(insertion, 0, ...firstEdit);

		display([firstEdit, secondEdit, insertion, result]);
	}

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");

			task.classList.remove("hidden");
			task.classList.add("visible");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");

			task.classList.remove("visible");
			task.classList.add("hidden");
		}
	}

	let chevron = document.getElementsByClassName("fas")[0];
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});

	splicer(arr1, arr2, n);
};