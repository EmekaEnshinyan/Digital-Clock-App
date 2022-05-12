const nominal = document.getElementById("clock");
const today = document.getElementById("date");

function clockTick(){
const date = new Date();
const now = new Date().toDateString();
const hh = date.getHours();
const mm = date.getMinutes();
const ss = date.getSeconds();

if (hh < 10){
    const time = `0${hh}:${mm}:${ss}`;
    nominal.innerText = time;
}else if (mm < 10){
    const time = `${hh}:0${mm}:${ss}`;
    nominal.innerText = time;
}else if (ss < 10){
    const time = `${hh}:${mm}:0${ss}`;
    nominal.innerText = time;
}else{
    const time = `${hh}:${mm}:${ss}`;
    nominal.innerText = time;
}

today.innerText = now;

setInterval(clockTick, 1000);
}

clockTick();

    