import './App.css';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import TaskList from './components/TaskList';
import Tasks from './components/Tasks';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        "id": 1,
        "name": "Einkaufen",
        "isDone": false
      },
      {
        "id": 2,
        "name": "Putzen",
        "isDone": false
      }
      ]
    }
  }

  addTask = (value) => {
    alert("Task added: " + value)
    let newTodo = {
      id: 1,
      name: value,
      isDone: false
    }
    let todoList = this.state.todos;
    todoList.push(newTodo)

    this.setState({
      todos: todoList
    })
  }

  removeTask = (props) => {
    const { todos } = this.state;
    todos.splice(props, 1);
    this.setState({
      todos,
    });
    console.log(this.state.todos)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TaskAdder taskAdded={this.addTask} />
        <TaskList todos={this.state.todos} taskRemoved={this.removeTask}/>
        </div>
    );
  }
}

export default App;
