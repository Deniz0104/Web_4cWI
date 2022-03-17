import './App.css';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import TaskList from './components/TaskList';
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

  render() {
    return (
    <div className="App">
      <Header />
      <TaskAdder />
      <TaskList todos={this.state.todos}/>
    </div>
    );
  }
}

export default App;
