import { FC } from 'react';
import './otpInput.scss';

interface IOtpInputProps {
  isError: boolean;
}

const OtpInput: FC<IOtpInputProps> = ({ isError }) => {
  console.log(isError);
  return (
    <div>
      <div>This is otp input</div>
    </div>
  );
};

export default OtpInput;
