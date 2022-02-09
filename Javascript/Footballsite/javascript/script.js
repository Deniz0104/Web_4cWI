
// Das Datum auf der Seite
var date = new Date();

var returnCurrentDate = date.getDate()+'.'+date.getUTCMonth()+1+'.'+date.getFullYear();

document.getElementById("date").innerHTML = returnCurrentDate;

// Die Teams auflisten

let urlTeams = "https://api.football-data.org/v2/competitions/2001/teams"

fetch(urlTeams, {
    method: "GET",
    headers: {
        "x-auth-token": "b7bfe6e6607c47d38156d6c3a748d097"
    }
})
.then(respone => respone.json())
.then(function (data) {
    var output="";
    for (let i = 0; i < 32; i++) {
        const element = data.teams[i]
        output += "<div class=images>"+"<img id=teamsLogo"+ " src="+element.crestUrl+">"+"</div>"+"<p class=teamName>"+element.name+"</p>";       
    }
    document.getElementById("teams").innerHTML= output
});
    
