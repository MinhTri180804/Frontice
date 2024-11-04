import { RegisterOptions } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IAboutOfField } from '../../../../../types/base';
import { IRegisterRequest } from '../../../../../types/request';

const useFormRegister = () => {
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

  console.log('password-value: ');

  const aboutOfConfirmPassword: IAboutOfField<
    RegisterOptions<IRegisterRequest, 'confirmPassword'>
  > = {
    name: `${t('Field.ConfirmPassword')}`,
    rule: {
      ...aboutOfPassword.rule,
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
