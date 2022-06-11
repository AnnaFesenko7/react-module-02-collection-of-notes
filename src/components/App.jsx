import React, { Component } from 'react';
import shortid from 'shortid';
import Container from './Container/Container';
import TodoList from 'components/TodoList';
import initialTodos from 'todos.json';
import Form from './Form/Form';
import Modal from 'components/Modal';
import Clock from './Clock/Clock';
import ColorPicker from 'components/ColorPicker';
import options from 'components/ColorPicker/ColorPickerOptions.json';
import IconButton from 'components/IconButton';
import { ReactComponent as Icon } from '../icons/plus.svg';

export default class App extends Component {
  state = {
    todos: initialTodos,
    showModal: false,
    showTimer: true,
  };
  componentDidMount() {
    const prevTodos = localStorage.getItem('todos');
    const parsTodos = JSON.parse(prevTodos);
    if (parsTodos) {
      this.setState({ todos: parsTodos });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

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

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
    console.log(this.state.showModal);
  };
  toggleTimer = () => {
    this.setState(prevState => ({
      showTimer: !prevState.showTimer,
    }));
  };

  render() {
    const { todos, showModal, showTimer } = this.state;
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

        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 18,
            color: '#010101',
          }}
        >
          <button onClick={this.toggleTimer} type="button">
            Открыть/закрыть таймер
          </button>
          {showTimer && <Clock onClose={this.toggleTimer} />}
        </div>

        <Container>
          <IconButton
            aria-label="Добавить todo"
            onClick={this.toggleModal}
            type="button"
          >
            <Icon width="40" height="40" fill="white" />
          </IconButton>
          {showModal && (
            <Modal>
              <Form
                onSubmit={this.formSubmitHandler}
                onClose={this.toggleModal}
              />
            </Modal>
          )}

          <div
            style={{
              // height: '100vh',
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
        </Container>
      </div>
    );
  }
}
