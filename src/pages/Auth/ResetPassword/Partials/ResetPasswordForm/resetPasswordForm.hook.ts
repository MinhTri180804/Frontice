import { RegisterOptions, useForm } from 'react-hook-form';
import { IResetPasswordRequest } from '../../../../../types/request';
import { useTranslation } from 'react-i18next';
import { IAboutOfField } from '../../../../../types/base';

const useResetPasswordForm = () => {
  const { getValues } = useForm<IResetPasswordRequest>();
  const { t } = useTranslation();

  const aboutOfNewPassword: IAboutOfField<
    RegisterOptions<IResetPasswordRequest, 'newPassword'>
  > = {
    name: `${t('Field.NewPassword')}`,
    rule: {
      required: {
        value: true,
        message: `${t('Validation.Field.Password.Require')}`,
      },

      minLength: {
        value: 8,
        message: `${t('Validation.Field.Password.MinLength', {
          length: 8,
        })}`,
      },

      maxLength: {
        value: 16,
        message: `${t('Validation.Field.Password.MaxLength', {
          length: 16,
        })}`,
      },
    },
  };

  const aboutOfConfirmPassword: IAboutOfField<
    RegisterOptions<IResetPasswordRequest, 'confirmPassword'>
  > = {
    name: `${t('Field.ConfirmPassword')}`,
    rule: {
      ...aboutOfNewPassword.rule,
      validate: (value) =>
        value === getValues('newPassword') ||
        `${t('Validation.Field.PasswordConfirm.Match')}`,
    },
  };

  return {
    aboutOfConfirmPassword,
    aboutOfNewPassword,
  };
};

export default useResetPasswordForm;