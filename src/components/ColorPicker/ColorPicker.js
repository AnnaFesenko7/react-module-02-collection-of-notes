import './ColorPicker.scss';
import classNames from 'classnames';

import { useState } from 'react';
// import React, { Component } from 'react';

function ColorPicker(options) {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);

  const { label } = options.options[activeOptionIndex];

  return (
    <div className="ColorPicker">
      <h1 className="ColorPickerTitle ">ColorPicker by hook</h1>
      <p>Выбран цвет:{label}</p>
      <div>
        {options.options.map((option, index) => {
          return (
            <span
              key={option.color}
              style={{ backgroundColor: option.color }}
              className={classNames('ColorPickerOption', {
                ColorPickerActive: index === activeOptionIndex,
              })}
              onClick={() => {
                setActiveOptionIndex(index);
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
// class ColorPicker extends Component {
//   state = {
//     activeOptionIndex: 0,
//   };
//   setActiveIndex = index => {
//     this.setState({ activeOptionIndex: index });
//   };

//   render() {
//     const { options } = this.props;
//     const { activeOptionIndex } = this.state;
//     const { label } = options[this.state.activeOptionIndex];
//     return (
//       <div className="ColorPicker">
//         <h1 className="ColorPickerTitle by hook">ColorPicker</h1>
//         <p>Выбран цвет:{label}</p>
//         <div>
//           {options.map((option, index) => {
//             return (
//               <span
//                 key={option.color}
//                 style={{ backgroundColor: option.color }}
//                 className={classNames('ColorPickerOption', {
//                   ColorPickerActive: index === activeOptionIndex,
//                 })}
//                 onClick={() => {
//                   this.setActiveIndex(index);
//                 }}
//               ></span>
//             );
//           })}
//           ;
//         </div>
//       </div>
//     );
//   }
// }
export default ColorPicker;
