var date = new Date();

var returnCurrentDate = date.getDate()+'.'+date.getUTCMonth()+1+'.'+date.getFullYear();

document.getElementById("date").innerHTML = returnCurrentDate;