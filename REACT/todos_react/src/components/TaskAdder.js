import React, { Component } from 'react'

export default class TaskAdder extends Component {


    addTask = () => {
        alert("Task added!")
    }

  render() {
    return (
      <div>
          <input placeholder='Add a task ...'></input>
          <button onClick={this.addTask}>Add</button>
      </div>
    )
  }
}
