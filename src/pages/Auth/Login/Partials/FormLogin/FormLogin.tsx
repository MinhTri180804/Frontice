import './formLogin.scss';
import { FC } from 'react';
import {
  Form,
  FormSubmitHandler,
  RegisterOptions,
  useForm,
} from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Input } from '../../../../../components/common';
import { Checkbox } from '../../../../../components/common/Checkbox';
import { paths } from '../../../../../constant';
import { ILoginRequest } from '../../../../../types/request/login';

const FormLogin: FC = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useForm<ILoginRequest>();

  const handleRememberAccount: () => void = () => {
    console.log('Remember account');
  };

  const handleLoginSuccess = () => {
    console.log('login success: ');
  };

  const handleLoginError = () => {
    console.log('login error: ');
  };

  const handleLogin: FormSubmitHandler<ILoginRequest> = async (data) => {
    console.log(data);
  };

  const ruleOfEmail: RegisterOptions<ILoginRequest, 'email'> = {
    required: {
      value: true,
      message: 'Email is not empty',
    },

    pattern: {
      // eslint-disable-next-line no-useless-escape
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: 'Email is not valid ',
    },
  };

  const ruleOfPassword: RegisterOptions<ILoginRequest, 'password'> = {
    required: {
      value: true,
      message: 'Password is not empty',
    },

    minLength: {
      value: 6,
      message: 'Length password less than 6',
    },
  };

  return (
    <Form
      className="login__form"
      control={control}
      onSuccess={handleLoginSuccess}
      onError={handleLoginError}
      onSubmit={handleLogin}
    >
      <Input
        {...register('email', ruleOfEmail)}
        label="Email"
        placeholder="Enter your email..."
        status={errors.email && 'error'}
        message={errors.email?.message}
      />

      <Input
        {...register('password', ruleOfPassword)}
        message={errors.email?.message}
        status={errors.email && 'error'}
        label="Password"
        placeholder="Enter your password..."
        type="password"
      />
      <div className="options">
        <Checkbox
          label="Remember password"
          eventChecked={handleRememberAccount}
        />

        <Link
          to={`${paths.auth}/${paths.forgotPassword}`}
          className="forgot-password"
        >
          forgot password ?
        </Link>
      </div>
      {/* TODO: update status disabled and event click of button component */}
      <Button type="primary" label="Login" size="medium" />
    </Form>
  );
};

export default FormLogin;
