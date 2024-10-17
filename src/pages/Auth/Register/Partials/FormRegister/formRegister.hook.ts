import { RegisterOptions, useForm } from 'react-hook-form';
import { IRegisterRequest } from '../../../../../types/request';
import { useTranslation } from 'react-i18next';
import { IAboutOfField } from '../../../../../types/base';

const useFormRegister = () => {
  const { getValues } = useForm<IRegisterRequest>();
  const { t } = useTranslation();

  const aboutOfFirstName: IAboutOfField<
    RegisterOptions<IRegisterRequest, 'firstName'>
  > = {
    name: `${t('Field.FirstName')}`,
    rule: {
      required: {
        value: true,
        message: `${t('Validation.Field.FirstName.Require')}`,
      },
    },
  };

  const aboutOfLastName: IAboutOfField<
    RegisterOptions<IRegisterRequest, 'lastName'>
  > = {
    name: `${t('Field.LastName')}`,
    rule: {
      required: {
        value: true,
        message: `${t('Validation.Field.LastName.Require')}`,
      },
    },
  };

  const aboutOfEmail: IAboutOfField<
    RegisterOptions<IRegisterRequest, 'email'>
  > = {
    name: `${t('Field.Email')}`,
    rule: {
      required: {
        value: true,
        message: `${t('Validation.Field.Email.Require')}`,
      },

      pattern: {
        // eslint-disable-next-line no-useless-escape
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: `${t('Validation.Field.Email.Pattern')}`,
      },
    },
  };

  const aboutOfPassword: IAboutOfField<
    RegisterOptions<IRegisterRequest, 'password'>
  > = {
    name: `${t('Field.Password')}`,
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
    RegisterOptions<IRegisterRequest, 'confirmPassword'>
  > = {
    name: `${t('Field.ConfirmPassword')}`,
    rule: {
      ...aboutOfPassword.rule,
      validate: (value) => {
        return (
          value === getValues('password') ||
          `${t('Validation.Field.PasswordConfirm.Match')}`
        );
      },
    },
  };

  return {
    aboutOfConfirmPassword,
    aboutOfEmail,
    aboutOfFirstName,
    aboutOfLastName,
    aboutOfPassword,
  };
};

export default useFormRegister;
