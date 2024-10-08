import './forgotPasswordForm.scss';
import { FC } from 'react';
import {
  Form,
  FormSubmitHandler,
  RegisterOptions,
  useForm,
} from 'react-hook-form';
import { Button, Input } from '../../../../../components/common';
import { IForgotPasswordRequest } from '../../../../../types/request/forgotPassword';

const ForgotPasswordForm: FC = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useForm<IForgotPasswordRequest>();
  const handleForgotPassword: FormSubmitHandler<IForgotPasswordRequest> = (
    data,
  ) => {
    console.log(data);
  };

  const handleForgotPasswordSuccess = () => {
    console.log('forgot password success');
  };

  const handleForgotPasswordError = () => {
    console.log('forgot password error');
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
      onSuccess={handleForgotPasswordSuccess}
      onError={handleForgotPasswordError}
      onSubmit={handleForgotPassword}
    >
      <Input
        {...register('email', ruleOfEmail)}
        status={errors.email && 'error'}
        message={errors.email?.message}
        label="email"
        type="email"
      />
      <Button type="primary" label="Forgot password" size="medium" />
    </Form>
  );
};

export default ForgotPasswordForm;
