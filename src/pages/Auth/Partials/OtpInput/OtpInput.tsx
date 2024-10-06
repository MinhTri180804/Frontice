import { ChangeEvent, FC, useState } from 'react';
import './otpInput.scss';
import classNames from 'classnames';

interface IOtpInputProps {
  isError?: boolean;
  isSuccess?: boolean;
}

const OtpInput: FC<IOtpInputProps> = ({
  isError = false,
  isSuccess = false,
}) => {
  console.log(isError);
  const [otpValue, setOtpValue] = useState<number | null>(null);
  const [error, setError] = useState<boolean>(isError);
  const [success] = useState<boolean>(isSuccess);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('handle change input otp');
    setOtpValue(Number(e.target.value));
    setError(false);
  };

  const handleKeyDown = () => {
    console.log('handle key down otp input');
  };

  const otpInputClass = classNames({
    'otp__input-component': true,
    'has-value': otpValue !== null,
    error: error,
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
