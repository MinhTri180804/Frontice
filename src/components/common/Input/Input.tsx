import React from 'react';
import './Input.scss'

interface InputProps {
    title?: string;
    width?: 'small' | 'medium' | 'large';
    type: string;
    placeholder?: string;
    required?: boolean;
}

const Input: React.FC<InputProps> = ({ ...props }) => {

    const { title, type, placeholder, required, width } = props

    return (
        <div className={`input-container ${width}`}>
            {title &&
                <label>
                    {title} {required && <span style={{ color: 'red' }}>*</span>}
                </label>
            }
            <input type={type} placeholder={placeholder} required={required} />
        </div>
    );
};

export default Input