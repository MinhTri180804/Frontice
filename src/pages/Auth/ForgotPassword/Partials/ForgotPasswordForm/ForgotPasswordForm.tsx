import { FC } from 'react';
import {
  Form,
  FormSubmitHandler,
  RegisterOptions,
  useForm,
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Input } from '../../../../../components/common';
import { paths } from '../../../../../constant';
import authService from '../../../../../services/authServices';
import { IForgotPasswordRequest } from '../../../../../types/request/forgotPassword';
import './forgotPasswordForm.scss';

const ForgotPasswordForm: FC = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useForm<IForgotPasswordRequest>();
  const navigate = useNavigate();
  const handleForgotPassword: FormSubmitHandler<IForgotPasswordRequest> = (
    data,
  ) => {
    const { email } = data.data;
    toast.promise(
      authService
        .forgotPassword({ email: email })
        .then((response) => {
          if (response.data.status === 200) {
            navigate(`${paths.auth}/${paths.otp}`, {
              state: {
                emailForgotPassword: email,
              },
            });
          } else {
            throw new Error('Verify email forgot password fail');
          }
        })
        .catch((error) => {
          throw error;
        }),
      {
        pending: 'Đang xác thực email và gửi mã OTP',
        success: 'Gửi mã otp thành công',
        error: 'Xác thực email và gửi mã OTP thất bại',
      },
    );
  };

  const ruleOfEmail: RegisterOptions<IForgotPasswordRequest, 'email'> = {
    required: {
      value: true,
      message: 'Email is not empty',
    },

    pattern: {
      // eslint-disable-next-line no-useless-escape
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: 'Email is not valid',
    },
  };

  return (
    <Form
      className="forgot__password-form"
      control={control}
      onSubmit={handleForgotPassword}
    >
      <Input
        {...register('email', ruleOfEmail)}
        status={errors.email && 'error'}
        message={errors.email?.message}
        label="email"
        type="email"
      />
      <Button styleType="primary" label="Forgot password" buttonSize="medium" />
    </Form>
  );
};

export default ForgotPasswordForm;
