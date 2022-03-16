import React, { Component } from 'react'
import styles from './TaskList.module.css'
import Tasks from './Tasks'

class TaskList extends Component {

  getAllTodos() {
    let widgets = [];
    this.props.todos.forEach(todo => {
      widgets.push(<Tasks title={todo.name} isDone={todo.isDone}/>);
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
