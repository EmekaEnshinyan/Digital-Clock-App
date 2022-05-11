const nominal = document.getElementById("clock");
const current = document.getElementById("date");
const total = document.getElementById("total-date");

function clockTick(){
const date = new Date();
const hh = date.getHours()
const mm = date.getMinutes();
const ss = date.getSeconds();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
let y = date.getYear();

const time = `${hh}:${mm}:${ss}`;
nominal.innerText = time;

const today = `${year},${month}, ${day}`;
current.innerText = today;

total.innerText = y;

setInterval(clockTick, 1000);
}
clockTick();

    