import s from './IconButton.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconButton extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    'aria-label': PropTypes.string.isRequired,
  };
  static defaultProps = {
    onClick: () => null,
    children: null,
  };
  render() {
    const { children, onClick, ...allyProps } = this.props;
    return (
      <button
        className={s.icon__button}
        type="submit"
        onClick={onClick}
        {...allyProps}
      >
        {children}
      </button>
    );
  }
}

export default IconButton;
