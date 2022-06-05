import React, { Component } from 'react';
import shortid from 'shortid';
import Container from './Container/Container';
import TodoList from 'components/TodoList';
import initialTodos from 'todos.json';
import Form from './Form/Form';

import ColorPicker from 'components/ColorPicker';
import options from 'components/ColorPicker/ColorPickerOptions.json';

export default class App extends Component {
  state = {
    todos: initialTodos,
  };
  deleteTodo = todoId => {
    this.setState(prevState => {
      return { todos: prevState.todos.filter(todo => todo.id !== todoId) };
    });
  };
  formSubmitHandler = ({ text }) => {
    console.log(text);
    const todo = { id: shortid.generate(), text, completed: false };
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };
  ToggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  render() {
    const { todos } = this.state;
    // const completedTodos = todos.filter(todo => todo.completed);
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

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

        <Container>
          <Form onSubmit={this.formSubmitHandler} />
        </Container>
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
            <p>Общее кол-во : {todos.length}</p>
            <p>Кол-во выполненных : {completedTodos}</p>
          </div>
          <TodoList
            todos={todos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.ToggleCompleted}
          />
        </div>
      </div>
    );
  }
}
