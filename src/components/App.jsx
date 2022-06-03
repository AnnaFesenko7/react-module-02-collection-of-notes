import React, { Component } from 'react';
import TodoList from 'components/TodoList';
import initialTodos from 'todos.json';

import ColorPicker from 'components/ColorPicker';
import options from 'components/ColorPicker/ColorPickerOptions.json';

export default class App extends Component {
  state = {
    todos: initialTodos,
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todo: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 18,
            color: '#010101',
          }}
        >
          <ColorPicker options={options} />
        </div>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 18,
            color: '#010101',
          }}
        >
          <div>
            <p>Общее кол-во : {}</p>
            <p>Кол-во выполненных : {}</p>
          </div>
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}
