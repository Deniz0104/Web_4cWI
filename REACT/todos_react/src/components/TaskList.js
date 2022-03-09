import React, { Component } from 'react'
import styles from './TaskList.module.css'
import Tasks from './Tasks'


export default class TaskList extends Component {
  render() {
    return (
      <div className={styles.list}>
          <Tasks/>
          <Tasks/>
          <Tasks/>
      </div>
    )
  }
}
