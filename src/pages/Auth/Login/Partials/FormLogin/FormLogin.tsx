import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContentProps } from 'react-toastify';
import { Button, Input } from '../../../../../components/common';
import { Checkbox } from '../../../../../components/common/Checkbox';
import { paths } from '../../../../../constant';
import authService from '../../../../../services/authServices';
import challengerService from '../../../../../services/challengerService';
import { useAuthStore } from '../../../../../store/authStore';
import { IBaseResponse } from '../../../../../types/base';
import { ILoginRequest } from '../../../../../types/request/login';
import {
  saveAccessToken,
  saveProfile,
  saveRefreshToken,
} from '../../../../../utils/localstorage';
import useFormLogin from './formLogin.hook';
import './formLogin.scss';

const DEFAULT_PAGE_LOGIN_SUCCESS = paths.home;

const FormLogin: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginRequest>();

  const { login } = useAuthStore();
  const { aboutOfEmail, aboutOfPassword } = useFormLogin();
  const { t } = useTranslation();
  const handleRememberAccount: () => void = () => {
    // TODO: Implement logic remember account
    console.log('Remember account');
  };

  const handleLogin: SubmitHandler<ILoginRequest> = (data) => {
    toast.promise(
      authService
        .login(data)
        .then(async (response) => {
          const { accessToken, refreshToken } = response.data.data;
          saveAccessToken(accessToken);
          saveRefreshToken(refreshToken);
          try {
            const responseProfile = await challengerService.profile();
            const dataProfile = responseProfile.data.data;
            saveProfile(dataProfile);
            login(dataProfile);
            navigate(DEFAULT_PAGE_LOGIN_SUCCESS);
            const MESSAGE_SUCCESS = `${t('ToastMessage.Auth.Login.success')}`;
            return MESSAGE_SUCCESS;
          } catch (error) {
            throw error || t('ToastMessage.Challenger.profile.error');
          }
        })

        .catch((error: IBaseResponse<null>) => {
          const MESSAGE_ERROR = `${t('ToastMessage.Auth.Login.error')}`;
          throw error.messageEng || MESSAGE_ERROR;
        }),

      {
        pending: `${t('ToastMessage.Auth.Login.pending')}`,
        success: {
          render: (response) => {
            return response.data as string;
          },
        },
        error: {
          render: (response: ToastContentProps<string>) => {
            return response.data;
          },
        },
      },
    );
  };

  console.log(errors.password?.message);

  return (
    <form className="login__form" onSubmit={handleSubmit(handleLogin)}>
      <Input
        {...register('email', aboutOfEmail.rule)}
        label={aboutOfEmail.name}
        placeholder="Enter your email..."
        status={errors.email && 'error'}
        message={errors.email?.message}
      />

      <Input
        {...register('password', aboutOfPassword.rule)}
        message={errors.password?.message}
        status={errors.password && 'error'}
        label={aboutOfPassword.name}
        placeholder="Enter your password..."
        type="password"
      />
      <div className="options">
        <Checkbox
          label={`${t('Checkbox.RememberAccount')}`}
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
      <Button
        styleType="primary"
        label={`${t('Button.Login')}`}
        buttonSize="medium"
        type="submit"
      />
    </form>
  );
};

export default FormLogin;
