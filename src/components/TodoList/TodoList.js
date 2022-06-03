import './TodoList.css';
import React, { Component } from 'react';

class TodoList extends Component {
  // handleDelete = id => {
  //   this.props.onDeleteTodo(id);
  // };

  render() {
    const { todos, onDeleteTodo } = this.props;
    debugger;
    return (
      <ul className="totalList">
        {todos.map(({ id, text }) => (
          <li key={id} className="totalListItem">
            <p className="totalList--text">{text}</p>
            <button onClick={() => onDeleteTodo(id)}>Удалить</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
