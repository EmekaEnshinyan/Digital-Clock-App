

function digitalClock(){
    let date = new Date();
    let hh = date.getHours()
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    let year = date.getYear();
    let nominal = hh + ":" + mm + ":" + ss;
    
      document.getElementById("clock").innerText = nominal;
       let clock = setTimeout(function(){digitalClock()}, 1000);
      
    document.getElementById("date").innerText = date;
    }
    digitalClock();