function allEvents(){
    document.getElementById("todoJSON").addEventListener("click", function() {
        loadTheToDo();
    })

    document.getElementById("userJSON").addEventListener("click", function() {
        loadTheUsers();
    })
}

function loadTheUsers() {
    fetch("http://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                return response.json();
            })
            .then(function (data){
                let text = ""
                data.forEach(user => {
                    text += "<li>" + user.name + "</li>";
                } );


                document.getElementById("addJSONEvents").innerHTML = text;
                
            })
            .catch(function (error) {
                console.log(error)
            });
}


function loadTheToDo() {
    fetch("http://jsonplaceholder.typicode.com/todos")
            .then(function (response) {
                return response.json();
            })
            .then(function (data){
                let text = ""
                data.forEach(loadtodo => {
                    text += "<li>" + loadtodo.title + "</li>";
                } );


                document.getElementById("addJSONEvents").innerHTML = text;
                
            })
            .catch(function (error) {
                console.log(error)
            });
}

allEvents();