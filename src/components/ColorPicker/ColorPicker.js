import './ColorPicker.scss';
import classNames from 'classnames';

import React, { Component } from 'react';

class ColorPicker extends Component {
  state = {
    activeOptionIndex: 0,
  };
  setActiveIndex = index => {
    this.setState({ activeOptionIndex: index });
  };
  // makeOptionClassName = (index, activeOptionIndex) => {
  //   return classNames('ColorPickerOption', {
  //     ColorPickerActive: index === activeOptionIndex,
  //   });
  // };
  render() {
    const { options } = this.props;
    const { activeOptionIndex } = this.state;
    const { label } = options[this.state.activeOptionIndex];
    return (
      <div className="ColorPicker">
        <h1 className="ColorPickerTitle">ColorPicker</h1>
        <p>Выбран цвет:{label}</p>
        <div>
          {options.map((option, index) => {
            return (
              <span
                key={option.color}
                style={{ backgroundColor: option.color }}
                className={
                  classNames('ColorPickerOption', {
                    ColorPickerActive: index === activeOptionIndex,
                  })
                  // index === activeOptionIndex
                  //   ? 'ColorPickerOption ColorPickerActive'
                  //   : 'ColorPickerOption'
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
