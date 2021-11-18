var taskArray = [];
function addTask() {
    var todoList = document.getElementById('todoList');
    var input = document.getElementById("inputTask").value;
    
    todoList.innerHTML += "<li class='todotasks"+taskArray.length+"'>"+ input +"</li>";
}


function drawTasks() {
    for (let i = 0; i < taskArray.length; i++) {
        todoList.innerHTML = "Hello" + taskArray[i];
        
        
    }

    

}

function deleteTask() {
    var todoList = document.getElementById('todoList');
    var input = document.getElementById("inputTask").value;
    
    todoList.innerHTML -= "<li>"+ input +"</li>";
}
