import React from 'react';
import GroupCheckBox, { ICheckBoxItem } from './Partials/GroupCheckBox';
import Toggle from './Partials/Toggle';
import './Filter.scss';
// Dữ liệu cho checkbox
const checkboxApi: ICheckBoxItem[] = [
  {
    title: 'Type challenge',
    type: 'checkbox',
    options: [
      {
        label: 'Premium',
        value: 'Premium',
      },
      {
        label: 'Normal',
        value: 'Normal',
      },
    ],
  },
  {
    title: 'Level',
    type: 'checkbox',
    options: [
      {
        label: 'Newbie',
        value: 'Newbie',
      },
      {
        label: 'Fesher',
        value: 'Fesher',
      },
      {
        label: 'Junior',
        value: 'Junior',
      },
    ],
  },
];
const Togglelabel = [`Can do`, `Can't do`];
const Filter: React.FC = () => {
  return (
    <div className="container-filter">
      <div className="title-filter">Filter</div>
      <div className="toggle">
        <div className="title-toggle">
          <h3>Status</h3>
        </div>
        <div className="group-toggle">
          <Toggle label={Togglelabel[0]} />
          <Toggle label={Togglelabel[1]} />
        </div>
      </div>
      <div className="group-check-box">
        <GroupCheckBox checkboxProps={checkboxApi} />
      </div>
    </div>
  );
};

export default Filter;
