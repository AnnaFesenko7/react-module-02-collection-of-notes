import 'components/TodoList/_TodoList.scss';
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
            <p className="totalList__text">{text}</p>
            <button
              type="button"
              className="totalList__button"
              onClick={() => onDeleteTodo(id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
