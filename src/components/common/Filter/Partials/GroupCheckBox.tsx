import React from 'react';
import { Checkbox } from '../../Checkbox';

interface ICheckBoxOption {
  label: string;
  value: string;
}
export interface ICheckBoxItem {
  title: string; //
  type: 'checkbox' | 'toggle';
  options: ICheckBoxOption[];
}

interface ICheckboxGroupProps {
  checkboxProps: ICheckBoxItem[];
}
const GroupCheckBox: React.FC<ICheckboxGroupProps> = ({ checkboxProps }) => {
  return (
    <div className="container-group-checkbox">
      {checkboxProps.map((item, itemIndex) => (
        <div key={itemIndex} className="group-checkbox">
          <h3>{item.title}</h3>
          <ul>
            {item.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <Checkbox label={option.label} key={option.value} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GroupCheckBox;
