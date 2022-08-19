let score = localStorage.getItem("score");
let click = document.querySelector(".clicky");
let scoreList = document.querySelector(".scoreList");

function view() {
	let localScore = localStorage.getItem("score");
	if (localScore != null) {
		scoreList.innerHTML = JSON.parse(localScore);
	}
}

click.onlick = function () {
	view();
};
