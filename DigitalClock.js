var current = new Date();

var day = (current.getDate());

var month = ("0" + (current.getMonth() + 1)).slice(-2);
    var today = current.getFullYear() + "-" + (month) + "-" + (day);
console.log(today);

