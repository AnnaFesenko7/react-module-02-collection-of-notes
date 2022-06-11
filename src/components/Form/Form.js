import React, { Component } from 'react';
import 'components/Form/_Form.scss';

class Form extends Component {
  state = {
    text: '',
  };
  handelInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onClose();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ text: '' });
  };
  render() {
    return (
      <div className="form__wrapper">
        <div className="form">
          <label className="form__text">
            Text
            <input
              className="form__input"
              name="text"
              type="text"
              value={this.state.name}
              onChange={this.handelInputChange}
            />
          </label>
        </div>
        <button
          className="form__button"
          type="button"
          onClick={this.handleSubmit}
        >
          Добавить заметку
        </button>
      </div>
    );
  }
}
export default Form;
