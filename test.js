let count = 0;
let cps = 0;
let ms = 0;
let started = false;
let counter = document.querySelector(".cps");
let test = document.querySelector(".test");
let reset = document.querySelector(".reset");
let timeleft = 10;

let resetCPS = counter.setTimeout(notPressed, 5000);

let downloadTimer = setInterval(function () {
	if (timeleft <= 0) {
		clearInterval(downloadTimer);
		document.getElementById("countdown").innerHTML = "Finished";
	} else {
		document.getElementById("countdown").innerHTML =
			timeleft + " seconds remaining";
	}
	timeleft -= 1;
}, 1000);

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
	update();
};
