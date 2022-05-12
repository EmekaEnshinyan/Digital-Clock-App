const nominal = document.getElementById("clock");
const today = document.getElementById("date");

function clockTick(){
const date = new Date();
const now = new Date().toDateString();
const hh = date.getHours();
const mm = date.getMinutes();
const ss = date.getSeconds();

const time = `${hh}:${mm}:${ss}`;
nominal.innerText = time;

today.innerText = now;

setInterval(clockTick, 1000);
}

clockTick();

    