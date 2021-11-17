
function addTask() {
    var todoList = document.getElementById('todoList');
    var input = document.getElementById("inputTask").value;
    
    todoList.innerHTML += "<li class='todotasks'>"+ input +"</li>";
}

function deleteTask() {
    var todoList = document.getElementById('todoList');
    var input = document.getElementById("inputTask").value;
    
    todoList.innerHTML -= "<li>"+ input +"</li>";
}
