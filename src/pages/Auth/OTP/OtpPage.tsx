import { FC } from 'react';
import './otpPage.scss';
import { OTPForm } from './Partials/OTPForm';

const OtpPage: FC = () => {
  //   TODO: Implement logic resend code
  const handleResendCode: () => void = () => {
    console.log('resend code !');
  };
  return (
    <div className="otp__page-container">
      <div className="heading">
        <div className="title">OTP Code Verify</div>

        <div className="sub-title">
          Please verify the code sent to your gmail
        </div>
      </div>

      <div className="content">
        <div className="main__content">
          <OTPForm />

          <div className="other">
            <span>
              You did not receive the OTP code ?
              <div onClick={handleResendCode} className="resend-code">
                Resend code
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
