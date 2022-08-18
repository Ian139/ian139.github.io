let count = 0;
let counter = document.querySelector(".cps");




document.querySelector(".test").onclick = function(){
    count++;
    counter.innerHTML = `CPS: ${count}`;
}

document.querySelector(".reset").onclick = function(){
    count = 0;
    counter.innerHTML = `CPS: ${count}`;
}