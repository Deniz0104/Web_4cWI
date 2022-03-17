import React, { Component } from 'react'
import styles from './Tasks.module.css'
import { IoIosCloseCircleOutline } from "react-icons/io"

export default class Tasks extends Component {

  removed = () => {
    alert("Hello")
  }

  render() {
    return (
      <div className={styles.list}>
        <div>{this.props.title}</div>
        <div>{this.props.isDone}</div>
        <div><IoIosCloseCircleOutline onClick={this.removed} className={styles.icon} /></div>
      </div>
    ) 
  }
}
