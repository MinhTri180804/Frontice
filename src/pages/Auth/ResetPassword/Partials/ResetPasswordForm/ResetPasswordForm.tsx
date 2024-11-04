import { FC } from 'react';
import { Form, FormSubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Input } from '../../../../../components/common';
import { paths } from '../../../../../constant';
import authService from '../../../../../services/authServices';
import { IBaseResponse } from '../../../../../types/base';
import { IResetPasswordRequest } from '../../../../../types/request/resetPassword';
import useResetPasswordForm from './resetPasswordForm.hook';
import './resetPasswordForm.scss';

interface IResetPasswordFromProps {
  resetToken: string;
}

const ResetPasswordForm: FC<IResetPasswordFromProps> = ({ resetToken }) => {
  const { i18n, t } = useTranslation();
  const i18Language = i18n.language;

  const {
    register,
    formState: { errors },
    control,
    getValues,
  } = useForm<IResetPasswordRequest>({
    defaultValues: { resetToken },
  });

  const { aboutOfConfirmPassword, aboutOfNewPassword } = useResetPasswordForm();

  const navigate = useNavigate();

  const handleResetPassword: FormSubmitHandler<IResetPasswordRequest> = (
    data,
  ) => {
    const formData: IResetPasswordRequest = {
      ...data.data,
      resetToken,
    };

    toast.promise(
      authService
        .resetPassword(formData)
        .then((response) => {
          const URL_NAVIGATE = `${paths.auth}/${paths.login}`;
          navigate(URL_NAVIGATE);

          const MESSAGE_SUCCESS = `${t('ToastMessage.Auth.ResetPassword.success')}`;
          if (i18Language === paths.LANGUAGE.english)
            return response.data.messageEng || MESSAGE_SUCCESS;

          if (i18Language === paths.LANGUAGE.vietnamese)
            return response.data.messageVN || MESSAGE_SUCCESS;
        })
        .catch((error: IBaseResponse<null>) => {
          const MESSAGE_ERROR = `${t('ToastMessage.Auth.ResetPassword.error')}`;
          if (i18Language === paths.LANGUAGE.english)
            return error.messageEng || MESSAGE_ERROR;

          if (i18Language === paths.LANGUAGE.vietnamese)
            return error.messageVN || MESSAGE_ERROR;
        }),
      {
        pending: `${t('ToastMessage.Auth.ResetPassword.pending')}`,
        success: {
          render: (response) => {
            return response.data as string;
          },
        },
        error: {
          render: (response) => {
            return response.data as string;
          },
        },
      },
    );
  };

  return (
    <Form
      className="reset__password-form"
      control={control}
      onSubmit={handleResetPassword}
    >
      <Input
        {...register('newPassword', aboutOfNewPassword.rule)}
        status={errors.newPassword && 'error'}
        message={errors.newPassword?.message}
        label={aboutOfNewPassword.name}
        type="password"
      />
      <Input
        {...register('confirmPassword', {
          ...aboutOfConfirmPassword.rule,
          validate: (value) =>
            value === getValues('newPassword') ||
            `${t('Validation.Field.PasswordConfirm.Match')}`,
        })}
        status={errors.confirmPassword && 'error'}
        message={errors.confirmPassword?.message}
        label={aboutOfConfirmPassword.name}
        type="password"
      />

      {/* TODO: update status disabled and event click of button component */}
      <Button
        styleType="primary"
        label={t('Button.ResetPassword')}
        buttonSize="medium"
      />
    </Form>
  );
};

export default ResetPasswordForm;
