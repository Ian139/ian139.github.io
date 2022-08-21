let count = 0;
let cps = 0;
let ms = 0;
let started = false;
let current = document.querySelector(".cps");
let test = document.querySelector(".test");
let reset = document.querySelector(".reset");
let autoResetTimer;

function resetResetTimer() {
	clearTimeout(autoResetTimer);
	autoResetTimer = setTimeout(resetTimer, 5000);
}

setInterval(() => {
	if (started) {
		ms += 10;
		cps = count / (ms / 1000);
		update();
	}
}, 10);

function update() {
	current.innerHTML = `CPS: ${cps.toFixed(2)}`;
}

function resetTimer() {
	count = 0;
	cps = 0;
	ms = 0;
	update();
}

test.onclick = function () {
	if (!started) {
		started = true;
	}
	count++;
	resetResetTimer();
};

reset.onclick = resetTimer;
