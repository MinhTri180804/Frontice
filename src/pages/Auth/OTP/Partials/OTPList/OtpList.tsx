import { OtpInput } from '../../../Partials/OtpInput';
import './otpList.scss';
import { FC } from 'react';

interface IOtpListProps {
  length: number;
  status?: 'success' | 'normal' | 'error' | 'loading';
}

const OtpList: FC<IOtpListProps> = ({ length, status = 'normal' }) => {
  return (
    <div className="otp__list-component">
      {Array(length)
        .fill('')
        .map((_, index) => (
          <OtpInput
            key={`otp-input-${index}`}
            isError={status === 'error'}
            isSuccess={status === 'success'}
          />
        ))}
    </div>
  );
};

export default OtpList;
