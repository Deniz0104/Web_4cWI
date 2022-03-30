import React, { Component } from 'react'
import Tasks from './Tasks'

export default class TaskAdder extends Component {


    addTask = () => {
        alert("Task added!")
        let newTask;

    }

    handleChange = ()=> {
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
          <input placeholder='Add a task ...' onChange={handleChange}></input>
          <button onClick={this.addTask}>Add</button>
      </div>
    )
  }
}
