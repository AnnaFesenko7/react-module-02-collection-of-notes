import s from './ColorPicker.module.css';
import React, { Component } from 'react';

class ColorPicker extends Component {
  state = {
    activeOptionIndex: 0,
  };
  setActiveIndex = index => {
    this.setState({ activeOptionIndex: index });
  };
  render() {
    const { options } = this.props;
    const { activeOptionIndex } = this.state;
    const { label } = options[this.state.activeOptionIndex];
    return (
      <div className={s.ColorPicker}>
        <h1 className={s.ColorPickerTitle}>ColorPicker</h1>
        <p>Выбран цвет:{label}</p>
        <div>
          {options.map((option, index) => {
            return (
              <span
                key={option.color}
                style={{ backgroundColor: option.color }}
                className={
                  index === activeOptionIndex
                    ? s.ColorPickerActive
                    : s.ColorPickerOption
                }
                onClick={() => {
                  this.setActiveIndex(index);
                }}
              ></span>
            );
          })}
          ;
        </div>
      </div>
    );
  }
}
export default ColorPicker;
