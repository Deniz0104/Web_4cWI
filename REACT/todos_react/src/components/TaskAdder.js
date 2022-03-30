import React, { Component } from 'react'
import Tasks from './Tasks'

export default class TaskAdder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "test"
    }
  }
  addTask = () => {
    alert("Task added!")
    let newTask;

  }

  handleChange = () => {
    console.log("changing")
  }

  value = {
    "id": null,
    "name": newTask,
    "isDone": false
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={handleChange}></input>
        <button onClick={this.addTask}>Add</button>
      </div>
    )
  }
}
