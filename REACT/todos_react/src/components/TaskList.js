import React, { Component } from 'react'
import styles from './TaskList.module.css'
import Tasks from './Tasks'
import { IoIosCloseCircleOutline } from "react-icons/io"

class TaskList extends Component {
  
  
  removeTask = () => {
    this.props.taskRemoved()

  }

  getAllTodos() {
    let widgets = [];
    this.props.todos.forEach(todo => {
      widgets.push(<Tasks title={todo.name} isDone={todo.isDone}/>,
      <div className={styles.containerIcon}><IoIosCloseCircleOutline onClick={this.removeTask} className={styles.icon}/></div>);
    });
    return widgets;
  }


  render() {
    return (
      <div className={styles.center}>
        <div className={styles.todolist}>
          {this.getAllTodos()}
        </div>
      </div>
    )
  }
}

export default TaskList
