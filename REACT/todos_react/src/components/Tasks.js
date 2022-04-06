import React, { Component } from 'react'
import styles from './Tasks.module.css'

export default class Tasks extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    
    }
  }

  render() {
    return (
      <div className={styles.list}>
        <div className={styles.styleText}>{this.props.title}</div>
        <div>{this.props.isDone}</div>
      </div>
    ) 
  }
}
