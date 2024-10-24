import { FC } from 'react';
import { Form, FormSubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContentProps } from 'react-toastify';
import { Button, Input } from '../../../../../components/common';
import { Checkbox } from '../../../../../components/common/Checkbox';
import { paths } from '../../../../../constant';
import authService from '../../../../../services/authServices';
import { IBaseResponse } from '../../../../../types/base';
import { IOptionLanguage } from '../../../../../types/entity';
import { ILoginRequest } from '../../../../../types/request/login';
import {
  saveAccessToken,
  saveAccount,
  saveRefreshToken,
} from '../../../../../utils/localstorage';
import useFormLogin from './formLogin.hook';
import './formLogin.scss';
import { useAuthStore } from '../../../../../store/authStore';

const DEFAULT_PAGE_LOGIN_SUCCESS = paths.home;

const FormLogin: FC = () => {
  const navigate = useNavigate();
  const {
    control,
    register,
    formState: { errors },
  } = useForm<ILoginRequest>();

  const { login } = useAuthStore();
  const { aboutOfEmail, aboutOfPassword } = useFormLogin();
  const { i18n, t } = useTranslation();
  const i18Language = i18n.language as IOptionLanguage;
  const handleRememberAccount: () => void = () => {
    // TODO: Implement logic remember account
    console.log('Remember account');
  };

  const handleLogin: FormSubmitHandler<ILoginRequest> = (data) => {
    toast.promise(
      authService
        .login(data.data)
        .then((response) => {
          const { accessToken, refreshToken, account } = response.data.data;
          saveAccessToken(accessToken);
          saveRefreshToken(refreshToken);
          saveAccount(account);
          login(account);

          navigate(DEFAULT_PAGE_LOGIN_SUCCESS);

          const MESSAGE_SUCCESS = `${t('ToastMessage.Auth.Login.success')}`;
          if (i18Language === paths.LANGUAGE.vietnamese) {
            return response.data.messageEng || MESSAGE_SUCCESS;
          }

          if (i18Language === paths.LANGUAGE.english) {
            return response.data.messageEng || MESSAGE_SUCCESS;
          }
        })
        .catch((error: IBaseResponse<null>) => {
          const MESSAGE_ERROR = `${t('ToastMessage.Auth.Login.error')}`;
          if (i18Language === paths.LANGUAGE.english)
            throw error.messageEng || MESSAGE_ERROR;

          if (i18Language === paths.LANGUAGE.vietnamese)
            throw error.messageVN || MESSAGE_ERROR;
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

  return (
    <Form className="login__form" control={control} onSubmit={handleLogin}>
      <Input
        {...register('email', aboutOfEmail.rule)}
        label={aboutOfEmail.name}
        placeholder="Enter your email..."
        status={errors.email && 'error'}
        message={errors.email?.message}
      />

      <Input
        {...register('password', aboutOfPassword.rule)}
        message={errors.email?.message}
        status={errors.email && 'error'}
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
      />
    </Form>
  );
};

export default FormLogin;
