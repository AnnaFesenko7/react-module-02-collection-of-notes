import './TodoList.scss';
import React, { Component } from 'react';

class TodoList extends Component {
  // constructor() {
  //   super();
  //   this.handleDelete = this.handleDelete.bind(this);
  // }
  // handleDelete = id => {
  //   const { onDeleteTodo } = this.props;
  //   console.log(id);

  //   onDeleteTodo(id);
  // };

  render() {
    const { todos, onDeleteTodo, onToggleCompleted } = this.props;

    return (
      <ul className="totalList">
        {todos.map(({ id, text, completed }) => (
          <li key={id} className="totalListItem">
            <input
              type="checkbox"
              className="totalList__checkbox"
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />
            <p className="totalList--text">{text}</p>
            <button onClick={() => onDeleteTodo(id)}>Удалить</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
