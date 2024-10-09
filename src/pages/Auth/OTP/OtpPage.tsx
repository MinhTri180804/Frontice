import { FC, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { paths } from '../../../constant';
import authService from '../../../services/authServices';
import './otpPage.scss';
import { OTPForm } from './Partials/OTPForm';

const OtpPage: FC = () => {
  const location = useLocation();

  const emailSignUp = location.state?.emailSignUp;
  const emailForgotPassword = location.state?.emailForgotPassword;

  useEffect(() => {
    const fetchApiSendOTP = () => {
      if (emailSignUp === null && emailForgotPassword === null) {
        return <Navigate to={`${paths.auth}/${paths.login}`} />;
      }
      if (emailSignUp) {
        toast.promise(
          authService
            .sendOTP({ gmail: emailSignUp })
            .then((response) => {
              if (response.data.status !== 200) {
                throw new Error('Send OTP to Email fail');
              }
              console.log(response);
            })
            .catch((error) => {
              throw error;
            }),
          {
            pending: 'Đang thực hiện gửi OTP đến email',
            success: 'Gửi OTP đến email thành công',
            error: 'Gửi OTP đến email thất bại',
          },
        );
      }
    };

    fetchApiSendOTP();
  });

  if (!emailSignUp && !emailForgotPassword) {
    return <Navigate to={`${paths.auth}/${paths.login}`} />;
  }

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
          <OTPForm lengthOTP={6} />

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
