var taskArray = [];
var todoListTasks = document.getElementById("todoList");

function addTask() {

    let input = document.getElementById("inputTask").value;
    if (input != "" && input != " ") {
        taskArray.push(input);
        drawTasks();
    }
    else {
        alert("That is not a task. Add a valid task!")
    }
    document.getElementById("inputTask").value = "";
}


function drawTasks() {
    let content = "";
    for (let i = 0; i < taskArray.length; i++) {
        content +=
        "<li class='task' id='task"+i+"'>" + taskArray[i] + "</li>";
    }
    todoListTasks.innerHTML = content;
}

