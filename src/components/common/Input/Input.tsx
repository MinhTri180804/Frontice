import React, { useId } from 'react';
import './Input.scss';

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  status?: 'default' | 'error' | 'success' | 'loading';
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Input: React.FC<InputProps> = ({ ...props }) => {
  const idInput = useId();

  const {
    label,
    type = 'text',
    placeholder = 'placeholder content',
    required,
    Icon,
    status = 'default',
  } = props;

  return (
    <div className={`input__component ${status} `}>
      {label && (
        <label htmlFor={idInput}>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}
      <div className="input__component-container">
        <input
          id={idInput}
          type={type}
          placeholder={placeholder}
          required={required}
        />
        {Icon && (
          <div className="icon">
            <Icon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
