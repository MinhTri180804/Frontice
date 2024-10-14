import { FC, useState } from 'react';
import { Form, FormSubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../../../../../components/common';
import { paths } from '../../../../../constant';
import authService from '../../../../../services/authServices';
import { IVerifyEmailRequest } from '../../../../../types/request/verifyEmail';
import { IVerifyForgotPassword } from '../../../../../types/request/verifyForgotPasswordOtp';
import { OtpInput } from '../../../Partials/OtpInput';
import './otpForm.scss';

interface IOTPFormProps {
  lengthOTP: number;
}

const OTPForm: FC<IOTPFormProps> = ({ lengthOTP }) => {
  const location = useLocation();
  const emailSignUp = location.state?.emailSignUp;
  const emailForgotPassword = location.state?.emailForgotPassword;
  const [OTPValues, setOTPValues] = useState<number[]>(
    Array(lengthOTP).fill(null),
  );
  const [stateOTP, setStateOTP] = useState<boolean[]>([]);

  const navigate = useNavigate();

  const { control } = useForm<IVerifyEmailRequest | IVerifyForgotPassword>();

  const handleVerifyOtp: FormSubmitHandler<
    IVerifyEmailRequest | IVerifyForgotPassword
  > = () => {
    const stateOTPReport = OTPValues.map((otpValue) => {
      if (otpValue === null) {
        return true;
      }

      return false;
    });

    if (stateOTPReport.includes(true)) {
      setStateOTP(stateOTPReport);
      toast.error('OTP Code is not empty');
      return;
    }

    const OTPString = [...OTPValues].join('');
    // TODO: Refactor login in here
    if (emailSignUp) {
      toast.promise(
        authService
          .verifyEmailSignup({
            email: emailSignUp,
            otp: OTPString,
          })
          .then((response) => {
            if (response.data.status === 200) {
              navigate(`${paths.auth}/${paths.login}`);
            } else {
              throw new Error('Verify OTP code fail');
            }
          })
          .catch((error) => {
            throw error;
          }),
        {
          pending: 'Đang thực hiện xác thực OTP',
          success: 'Xác thực OTP thành công',
          error: 'Mã OTP không chính xác',
        },
      );
    }

    if (emailForgotPassword) {
      toast.promise(
        authService
          .verifyForgotPasswordOTP({
            email: emailForgotPassword,
            otp: OTPString,
          })
          .then((response) => {
            if (response.data.status === 200) {
              const { data: resetToken } = response.data;
              navigate(`${paths.auth}/${paths.resetPassword}`, {
                state: {
                  resetToken: resetToken,
                },
              });
            } else {
              throw new Error('Verify otp forgot password fail');
            }
          })
          .catch((error) => {
            throw error;
          }),
        {
          pending: 'Đang thực hiện xác thực OTP',
          success: 'Thực hiện xác thực OTP quên mật khẩu thành công',
          error: 'OTP không đúng',
        },
      );
    }
  };

  const handleChangeValueOtp: (index: number, value: number) => void = (
    index,
    value,
  ) => {
    const newOTPValues = OTPValues.map((otpValue, indexOrigin) => {
      if (indexOrigin !== index) return otpValue;

      return value;
    });

    setOTPValues(newOTPValues);
  };

  return (
    <Form className="otp__form" control={control} onSubmit={handleVerifyOtp}>
      <div className="otp__list-component">
        {Array(lengthOTP)
          .fill('')
          .map((_, index) => (
            <OtpInput
              index={index}
              onChangeValue={handleChangeValueOtp}
              key={`otp-input-${index}`}
              isError={stateOTP[index]}
            />
          ))}
      </div>
      <Button styleType="primary" label="Verify OTP" buttonSize="medium" />
    </Form>
  );
};

export default OTPForm;
