getTeams();
getMatches();


// Das Datum auf der Seite
var date = new Date();
var getMonth = date.getUTCMonth()+1;
var returnCurrentDate = date.getDate()+'.'+getMonth+'.'+date.getFullYear();

document.getElementById("date").innerHTML = returnCurrentDate;

// Die Teams auflisten

function getTeams() {
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
}    

// Die Matches auflisten
function getMatches() {
    let urlMatches = "https://api.football-data.org/v2/competitions/2021/matches"

    fetch(urlMatches, {
        method: "GET",
        headers: {
            "x-auth-token": "b7bfe6e6607c47d38156d6c3a748d097"
        }
    })
    .then(respone => respone.json())
    .then(function (data) {
        var output2="";

        for (let i = 0; i < 10; i++) {
            const element = data.matches[i]
            var winnerTeam;
            if (element.score.winner == "HOME_TEAM") {
                winnerTeam = element.homeTeam.name;
            }
            else if (element.score.winner == "AWAY_TEAM") {
                winnerTeam = element.awayTeam.name;
            }
            output2 += "<div class=matches>"+element.homeTeam.name+" vs "+element.awayTeam.name+"<div class=winner>"+"Winner: "+winnerTeam+" "+element.score.fullTime.homeTeam+" : "+
            element.score.fullTime.awayTeam+"</div>"+"</div>";       
        }
        document.getElementById("matches").innerHTML= output2
    });
}