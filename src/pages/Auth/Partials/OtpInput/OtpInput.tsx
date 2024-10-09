import { ChangeEvent, FC, useState } from 'react';
import './otpInput.scss';
import classNames from 'classnames';

interface IOtpInputProps {
  isError?: boolean;
  isSuccess?: boolean;
  index: number;
  onChangeValue: (index: number, value: number) => void;
}

const OtpInput: FC<IOtpInputProps> = ({
  isError = false,
  isSuccess = false,
  index,
  onChangeValue,
}) => {
  const [otpValue, setOtpValue] = useState<number | null>(null);
  const [success] = useState<boolean>(isSuccess);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setOtpValue(value);
    onChangeValue(index, value);
  };

  const handleKeyDown = () => {
    console.log('handle key down otp input');
  };

  const otpInputClass = classNames({
    'otp__input-component': true,
    'has-value': otpValue !== null,
    error: isError,
    success: success,
  });
  return (
    <input
      type="text"
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      className={otpInputClass}
      maxLength={1}
      value={otpValue || ''}
    />
  );
};

export default OtpInput;
