import React from 'react';
import './Dropdown.scss';
import {
  Cog6ToothIcon,
  UserIcon,
  ArrowLeftEndOnRectangleIcon,
} from '@heroicons/react/24/outline';

interface DropdownProps {
  isOpen: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen }) => {
  return (
    <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-item">
        <Cog6ToothIcon height={24} width={24} color="#000" />
        <span>Setting</span>
      </div>
      <div className="dropdown-item">
        <UserIcon height={24} width={24} color="#000" />
        <span>Profile</span>
      </div>
      <div className="dropdown-item">
        <ArrowLeftEndOnRectangleIcon height={24} width={24} color="#000" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Dropdown;
