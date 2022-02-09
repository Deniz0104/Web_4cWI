// Das Datum auf der Seite
var date = new Date();
var getMonth = date.getUTCMonth()+1;
var returnCurrentDate = date.getDate()+'.'+getMonth+'.'+date.getFullYear();

document.getElementById("date").innerHTML = returnCurrentDate;

// Die Teams auflisten
let urlTeams = "https://api.football-data.org/v2/competitions/2021/teams"

fetch(urlTeams, {
    method: "GET",
    headers: {
        "x-auth-token": "b7bfe6e6607c47d38156d6c3a748d097"
    }
})
.then(respone => respone.json())
.then(function (data) {
    var output="";
    for (let i = 0; i < 20; i++) {
        const element = data.teams[i]
        output += "<div class=images>"+"<img id=teamsLogo"+ " src="+element.crestUrl+">"+"<p class=teamName>"+element.name+"</p>"+"</div>";       
    }
    document.getElementById("teams").innerHTML= output
});
    
// Die Matches auflisten

let urlMatches = "http://api.football-data.org/v2/matches"

fetch(urlMatches, {
    method: "GET",
    headers: {
        "x-auth-token": "b7bfe6e6607c47d38156d6c3a748d097"
    }
})
.then(respone => respone.json())
.then(function (data) {
    var outputMatch="";
    for (let i = 0; i < 13; i++) {
        const element = data.matches[i]
        outputMatch += "<div class=matches>"+"<p>"+element.name+"</p> </div>";
    }
    document.getElementById("matchesContent").innerHTML = outputMatch
});
