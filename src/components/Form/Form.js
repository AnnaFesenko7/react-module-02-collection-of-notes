import React, { Component } from 'react';

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
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ text: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Text
          <input
            name="text"
            type="text"
            value={this.state.name}
            onChange={this.handelInputChange}
          />
        </label>
        {/* <label>
          Tag
          <input
            name="tag"
            type="text"
            value={this.state.tag}
            onChange={this.handelInputChange}
          />
        </label> */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Form;
