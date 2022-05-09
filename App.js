var HH = 00;
var MM = 00;
var SS = 00;
var nom = document.getElementById("nominal");


function clockTick() {
    
    nom.innerText = HH + ":" + MM + ":" + SS + 1;
}
setInterval(clockTick, 1000);

//recursive function approach
function clockTickRecursive(hour, minute, second){
        if (hour == 24){  
            return clockTickRecursive(hour = 0, minute = 0, second = 0);
        } 
        //else: run setinterval func
        return clockTickRecursive(hour + 1, minute, second);
        }

let rec = clockTickRecursive(0,0,0);

console.log(rec);
console.log(nom);
