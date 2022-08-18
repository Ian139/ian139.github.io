let count = 0;
let cps = 0;
let ms = 0;
let started = false;
let counter = document.querySelector(".cps");
let test = document.querySelector(".test");
let reset = document.querySelector(".reset");
let seconds = document.querySelector(".seconds");
let scores = [];
let autoResetTimer;
let storedScores = JSON.parse(localStorage.getItem("scores"));
let ul = document.querySelector(".scores");
let li = document.createElement("li");

window.addEventListener("load", () => {
	test.addEventListener("click", countDown);
});

function countDown() {
	test.removeEventListener("click", countDown);
	var timeleft = 10;

	var downTimer = setInterval(function downTime() {
		seconds.innerHTML = `Time Left: ${timeleft}`;

		timeleft -= 1;
		if (timeleft <= 0) {
			clearInterval(downTimer);
			seconds.innerHTML = "Time is up!";
			scores.push(cps);
			console.log(scores);
			setTimeout(() => {
				test.addEventListener("click", countDown);
			}, 2500);
		}
	}, 1000);

	console.log(seconds);
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

localStorage.setItem("scores", JSON.stringify(scores));
