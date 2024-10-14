import { FC } from 'react';
import {
  Form,
  FormSubmitHandler,
  RegisterOptions,
  useForm,
} from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Input } from '../../../../../components/common';
import { Checkbox } from '../../../../../components/common/Checkbox';
import { paths } from '../../../../../constant';
import authService from '../../../../../services/authServices';
import { ILoginRequest } from '../../../../../types/request/login';
import {
  saveAccessToken,
  saveAccount,
  saveRefreshToken,
} from '../../../../../utils/localstorage';
import './formLogin.scss';

const FormLogin: FC = () => {
  const navigate = useNavigate();
  const {
    control,
    register,
    formState: { errors },
  } = useForm<ILoginRequest>();

  const handleRememberAccount: () => void = () => {
    console.log('Remember account');
  };

  const handleLogin: FormSubmitHandler<ILoginRequest> = (data) => {
    toast.promise(
      authService.login(data.data).then((response) => {
        if (response.data.status === 200) {
          const { accessToken, account } = response.data.data;
          saveAccessToken(accessToken);
          saveRefreshToken(account.refreshToken);
          saveAccount(account);
          // TODO: Implement default page before login success
          navigate('/');
        } else {
          throw new Error('Login is fail');
        }
      }),
      {
        pending: 'Đang thực hiện đăng nhập',
        success: 'Đăng nhập thành công',
        error: 'Đăng nhập thất bại',
      },
    );
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
    <Form className="login__form" control={control} onSubmit={handleLogin}>
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
      <Button styleType="primary" label="Login" buttonSize="medium" />
    </Form>
  );
};

export default FormLogin;
