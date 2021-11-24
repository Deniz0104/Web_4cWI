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
    input = "";
}

function drawTasks() {
    let content = "";
    let responsiblePerson = document.getElementById("responsiblePerson").value;
    if (responsiblePerson == "" || responsiblePerson == " ") {
        alert("Who is responsible for the task - Please add the name!");
    }
    else {
        for (let i = 0; i < taskArray.length; i++) {
            content = "<li id='task"+i+"'>" + i + ". " +"<input id='checkBoxInput' type='checkbox'/>" + taskArray[i] + " - " + responsiblePerson + "</li>";
        }
    }
    todoListTasks.innerHTML += content;
}


