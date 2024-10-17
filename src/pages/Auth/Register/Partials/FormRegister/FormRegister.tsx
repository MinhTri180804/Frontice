import { FC } from 'react';
import { Form, FormSubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContentProps } from 'react-toastify';
import { Button, Input } from '../../../../../components/common';
import { paths } from '../../../../../constant';
import authService from '../../../../../services/authServices';
import { IBaseResponse } from '../../../../../types/base';
import { IOptionLanguage } from '../../../../../types/entity';
import { IRegisterRequest } from '../../../../../types/request/register';
import './formRegister.scss';
import useFormRegister from './formRegister.hook';

const FormRegister: FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const i18nLanguage = i18n.language as IOptionLanguage;
  const {
    aboutOfConfirmPassword,
    aboutOfEmail,
    aboutOfFirstName,
    aboutOfLastName,
    aboutOfPassword,
  } = useFormRegister();

  const {
    register,
    control,
    formState: { errors },
    getValues,
  } = useForm<IRegisterRequest>({
    defaultValues: {
      role: 'CHALLENGER',
    },
  });

  const { t } = useTranslation();

  const handleRegister: FormSubmitHandler<IRegisterRequest> = async (data) => {
    const formData: IRegisterRequest = {
      ...data.data,
    };

    toast.promise(
      authService
        .signUp(formData)
        .then((response) => {
          const URL_REDIRECT = `${paths.auth}/${paths.otp}`;
          navigate(URL_REDIRECT, {
            state: {
              emailSignUp: response.data.data.email,
            },
          });

          const MESSAGE_SUCCESS = `${t('ToastMessage.Auth.Register.success')}`;
          if (i18nLanguage === paths.LANGUAGE.english)
            return response.data.messageVN || MESSAGE_SUCCESS;
          if (i18nLanguage === paths.LANGUAGE.vietnamese)
            return response.data.messageEng || MESSAGE_SUCCESS;
        })
        .catch((error: IBaseResponse<null>) => {
          const MESSAGE_ERROR = `${t('ToastMessage.Auth.Register.error')}`;
          if (i18nLanguage === paths.LANGUAGE.vietnamese)
            throw error.messageVN || MESSAGE_ERROR;
          if (i18nLanguage === paths.LANGUAGE.english)
            throw error.messageEng || MESSAGE_ERROR;
        }),
      {
        pending: `${t('ToastMessage.Auth.Register.pending')}`,
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
    <Form
      className="form__register"
      control={control}
      onSubmit={handleRegister}
    >
      <div className="input-group">
        <Input
          {...register('firstName', aboutOfFirstName.rule)}
          status={errors.firstName && 'error'}
          message={errors.firstName?.message}
          label={aboutOfFirstName.name}
          placeholder="Enter your first name..."
        />
        {/* TODO: implement input password component in here */}
        <Input
          {...register('lastName', aboutOfLastName.rule)}
          status={errors.lastName && 'error'}
          message={errors.lastName?.message}
          label={aboutOfLastName.name}
          placeholder="Enter your last name..."
        />
      </div>
      <Input
        {...register('email', aboutOfEmail.rule)}
        status={errors.email && 'error'}
        message={errors.email?.message}
        label={aboutOfEmail.name}
        placeholder="Enter your email..."
      />
      <Input
        {...register('password', aboutOfPassword.rule)}
        status={errors.password && 'error'}
        message={errors.password?.message}
        label={`${aboutOfPassword.name}`}
        placeholder="Enter your password..."
        type="password"
      />

      <Input
        {...register('confirmPassword', {
          ...aboutOfConfirmPassword.rule,
          validate: (value) => {
            return (
              value === getValues('password') ||
              `${t('Validation.Field.PasswordConfirm.Match')}`
            );
          },
        })}
        status={errors.confirmPassword && 'error'}
        message={errors.confirmPassword?.message}
        label={`${aboutOfConfirmPassword.name}`}
        placeholder="Enter your password confirm..."
        type="password"
      />

      <Button
        styleType="primary"
        label={`${t('Button.Register')}`}
        buttonSize="medium"
      />
    </Form>
  );
};

export default FormRegister;
