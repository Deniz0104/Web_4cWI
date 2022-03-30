import React, { Component } from 'react'
import styles from './Tasks.module.css'
import { IoIosCloseCircleOutline } from "react-icons/io"

export default class Tasks extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    }
  }

  removeTask = () => {
    this.props.taskRemoved();

  }

  render() {
    return (
      <div className={styles.list}>
        <div className={styles.styleText}>{this.props.title}</div>
        <div><input type="checkbox" className={styles.checkBox}></input></div>
        <div>{this.props.isDone}</div>
        <div><IoIosCloseCircleOutline onClick={this.removeTask} className={styles.icon} /></div>
      </div>
    ) 
  }
}
