var HH = 00;
var MM = 00;
var SS = 00;
var nom = document.getElementById("nominal");


function clockTick() {
    
    nom.innerText = HH + ":" + MM + ":" + SS + 1;
}
setInterval(clockTick, 1000);







console.log(nom);
