import React, { Component } from 'react'

export default class TaskAdder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "test"
    }
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  addTask = () => {
    this.props.taskAdded(this.state.inputValue)

  }

 

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
        <button onClick={this.addTask}>Add</button>
      </div>
    )
  }
}
