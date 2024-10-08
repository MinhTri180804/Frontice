import './otpForm.scss';
import { FC } from 'react';
import { Form, FormSubmitHandler, useForm } from 'react-hook-form';
import { OtpList } from '../OTPList';
import { Button } from '../../../../../components/common';
import { IVerifyEmailRequest } from '../../../../../types/request/verifyEmail';
import { IVerifyForgotPassword } from '../../../../../types/request/verifyForgotPasswordOtp';

const OTPForm: FC = () => {
  const { control } = useForm<IVerifyEmailRequest | IVerifyForgotPassword>();
  const handleVerifyOtp: FormSubmitHandler<
    IVerifyEmailRequest | IVerifyForgotPassword
  > = (data) => {
    console.log(data);
  };

  const handleVerifySuccess = () => {
    console.log('verify success');
  };

  const handleVerifyError = () => {
    console.log('verify error');
  };

  return (
    <Form
      className="otp__form"
      control={control}
      onSubmit={handleVerifyOtp}
      onSuccess={handleVerifySuccess}
      onError={handleVerifyError}
    >
      <OtpList length={6} />
      <Button type="primary" label="Verify OTP" size="medium" />
    </Form>
  );
};

export default OTPForm;
