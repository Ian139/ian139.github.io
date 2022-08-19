let count = 0;
let cps = 0;
let ms = 0;
let finalScore = 0;
let started = false;
let counter = document.querySelector(".cps");
let test = document.querySelector(".test");
let reset = document.querySelector(".reset");
let submit = document.querySelector(".submit");
let seconds = document.querySelector(".seconds");
let score = document.querySelector(".scores");
let clear = document.querySelector(".clear");
//let storedScores = JSON.parse(localStorage.getItem("scores"));

window.addEventListener("load", () => {
	test.addEventListener("click", countDown);
});

function countDown() {
	test.removeEventListener("click", countDown);
	var timeleft = 2;

	var downTimer = setInterval(function downTime() {
		seconds.innerHTML = `Time Left: ${timeleft}`;

		timeleft -= 1;
		if (timeleft < 0) {
			clearInterval(downTimer);
			seconds.innerHTML = "Time is up!";
			finalScore = cps;
			started = false;
			setTimeout(() => {
				test.addEventListener("click", countDown);
			}, 2500);
		}
	}, 1000);
}

setInterval(() => {
	if (started) {
		ms += 10;
		cps = count / (ms / 1000);
		update();
	}
}, 10);

function update() {
	counter.innerHTML = `CPS: ${cps.toFixed(2)}`;
}

function save() {
	let scores;
	let localScore = localStorage.getItem("score");

	if (localScore === null) {
		scores = [];
	} else {
		scores = JSON.parse(localScore);
	}

	scores.push(" " + finalScore);
	scores.sort();
	scores.reverse();

	localStorage.setItem("score", JSON.stringify(scores));
}

function view() {
	let localScore = localStorage.getItem("score");
	if (localScore != null) {
		score.innerHTML = JSON.parse(localScore);
	}
}

submit.onclick = function () {
	save();
	view();
};

test.onclick = function () {
	if (!started) {
		started = true;
	}

	count++;
};

reset.onclick = function () {
	count = 0;
	cps = 0;
	ms = 0;
	update();
};

clear.onclick = function () {
	localStorage.clear();
	score.innerHTML = "No Scores";
};
