import { FC, useState } from 'react';
import { Form, FormSubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContentProps } from 'react-toastify';
import { Button } from '../../../../../components/common';
import { paths } from '../../../../../constant';
import authService from '../../../../../services/authServices';
import { IVerifyEmailRequest } from '../../../../../types/request/verifyEmail';
import { IVerifyForgotPassword } from '../../../../../types/request/verifyForgotPasswordOtp';
import { OtpInput } from '../../../Partials/OtpInput';
import './otpForm.scss';
import { useTranslation } from 'react-i18next';
import { IBaseResponse } from '../../../../../types/base';
import { IOptionLanguage } from '../../../../../types/entity';

interface IOTPFormProps {
  lengthOTP: number;
}

const OTPForm: FC<IOTPFormProps> = ({ lengthOTP }) => {
  const location = useLocation();
  const emailSignUp = location.state?.emailSignUp;
  const emailForgotPassword = location.state?.emailForgotPassword;
  const { i18n, t } = useTranslation();
  const i18nLanguage = i18n.language as IOptionLanguage;
  const [OTPValues, setOTPValues] = useState<number[]>(
    Array(lengthOTP).fill(null),
  );
  const [stateOTP, setStateOTP] = useState<boolean[]>([]);

  const navigate = useNavigate();

  const { control } = useForm<IVerifyEmailRequest | IVerifyForgotPassword>();

  const handleVerifyOtp: FormSubmitHandler<
    IVerifyEmailRequest | IVerifyForgotPassword
  > = () => {
    const stateOTPReport = OTPValues.map((otpValue) => {
      if (otpValue === null) {
        return true;
      }

      return false;
    });

    if (stateOTPReport.includes(true)) {
      setStateOTP(stateOTPReport);
      toast.error(`${t('Validation.Field.Otp.Require')}`);
      return;
    }

    const OTPString = [...OTPValues].join('');
    // TODO: Refactor login in here
    if (emailSignUp) {
      toast.promise(
        authService
          .verifyEmailSignup({
            email: emailSignUp,
            otp: OTPString,
          })
          .then((response) => {
            navigate(`${paths.auth}/${paths.login}`);
            const MESSAGE_SUCCESS = `${t('ToastMessage.Auth.OTP.success')}`;
            if (i18nLanguage === paths.LANGUAGE.english)
              return response.data.messageEng || MESSAGE_SUCCESS;
            if (i18nLanguage === paths.LANGUAGE.vietnamese)
              return response.data.messageVN || MESSAGE_SUCCESS;
          })
          .catch((error: IBaseResponse<null>) => {
            const MESSAGE_ERROR = `${t('ToastMessage.Auth.OTP.error')}`;
            if (i18nLanguage === paths.LANGUAGE.english)
              throw error.messageEng || MESSAGE_ERROR;
            if (i18nLanguage === paths.LANGUAGE.vietnamese)
              throw error.messageVN || MESSAGE_ERROR;
          }),
        {
          pending: `${t('ToastMessage.Auth.OTP.pending')}`,
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
    }

    if (emailForgotPassword) {
      toast.promise(
        authService
          .verifyForgotPasswordOTP({
            email: emailForgotPassword,
            otp: OTPString,
          })
          .then((response) => {
            const { data: resetToken } = response.data;
            navigate(`${paths.auth}/${paths.resetPassword}`, {
              state: {
                resetToken: resetToken,
              },
            });

            const MESSAGE_SUCCESS = `${t('ToastMessage.Auth.OTP.success')}`;
            if (i18nLanguage === paths.LANGUAGE.english) {
              return response.data.messageEng || MESSAGE_SUCCESS;
            }

            if (i18nLanguage === paths.LANGUAGE.vietnamese) {
              return response.data.messageVN || MESSAGE_SUCCESS;
            }
          })
          .catch((error: IBaseResponse<null>) => {
            const MESSAGE_ERROR = `${t('ToastMessage.Auth.OTP.error')}`;
            if (i18nLanguage === paths.LANGUAGE.english) {
              return error.messageEng || MESSAGE_ERROR;
            }

            if (i18nLanguage === paths.LANGUAGE.vietnamese) {
              return error.messageVN || MESSAGE_ERROR;
            }
          }),
        {
          pending: `${t('ToastMessage.Auth.OTP.pending')}`,
          success: {
            render: (response) => {
              return response.data as string;
            },
          },
          error: {
            render: (response: ToastContentProps<string>) => {
              return response.data as string;
            },
          },
        },
      );
    }
  };

  const handleChangeValueOtp: (
    index: number,
    value: string | number,
  ) => void = (index, value) => {
    const newOTPValues = OTPValues.map((otpValue, indexOrigin) => {
      if (indexOrigin !== index) return otpValue;

      return value as number;
    });

    setOTPValues(newOTPValues);
  };

  return (
    <Form className="otp__form" control={control} onSubmit={handleVerifyOtp}>
      <div className="otp__list-component">
        {Array(lengthOTP)
          .fill('')
          .map((_, index) => (
            <OtpInput
              index={index}
              onChangeValue={handleChangeValueOtp}
              key={`otp-input-${index}`}
              isError={stateOTP[index]}
            />
          ))}
      </div>
      <Button
        styleType="primary"
        label={`${t('Button.VerifyOtp')}`}
        buttonSize="medium"
      />
    </Form>
  );
};

export default OTPForm;
