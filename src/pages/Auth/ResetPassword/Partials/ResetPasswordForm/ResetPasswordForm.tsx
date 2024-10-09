import './resetPasswordForm.scss';
import { FC } from 'react';
import {
  Form,
  FormSubmitHandler,
  RegisterOptions,
  useForm,
} from 'react-hook-form';
import { Button, Input } from '../../../../../components/common';
import { IResetPasswordRequest } from '../../../../../types/request/resetPassword';
import authService from '../../../../../services/authServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../../../constant';

interface IResetPasswordFromProps {
  resetToken: string;
}

const ResetPasswordForm: FC<IResetPasswordFromProps> = ({ resetToken }) => {
  const {
    register,
    formState: { errors },
    control,
    getValues,
  } = useForm<IResetPasswordRequest>({
    defaultValues: { resetToken: '123123' },
  });

  const navigate = useNavigate();

  const handleResetPassword: FormSubmitHandler<IResetPasswordRequest> = (
    data,
  ) => {
    const formData: IResetPasswordRequest = {
      ...data.data,
      resetToken: resetToken,
    };

    toast.promise(
      authService
        .resetPassword(formData)
        .then((response) => {
          if (response.data.status === 200) {
            navigate(`${paths.auth}/${paths.login}`);
          } else {
            throw new Error(response.data.messageVN);
          }
        })
        .catch((error) => {
          throw error.message;
        }),
      {
        pending: 'Đang thực hiện reset mật khẩu',
        success: 'Đổi mật khẩu thành công',
        error: 'Đổi mật khẩu thất bại',
      },
    );
  };

  const ruleOfNewPassword: RegisterOptions<
    IResetPasswordRequest,
    'newPassword'
  > = {
    required: {
      value: true,
      message: 'Password is not empty',
    },

    minLength: {
      value: 8,
      message: 'Length password less than 8',
    },
  };

  const ruleOfConfirmPassword: RegisterOptions<
    IResetPasswordRequest,
    'confirmPassword'
  > = {
    ...ruleOfNewPassword,
    validate: (value) =>
      value === getValues('newPassword') || 'Passwords do not match',
  };

  return (
    <Form
      className="reset__password-form"
      control={control}
      onSubmit={handleResetPassword}
    >
      <Input
        {...register('newPassword', ruleOfNewPassword)}
        status={errors.newPassword && 'error'}
        message={errors.newPassword?.message}
        label="new password "
        type="password"
      />
      <Input
        {...register('confirmPassword', ruleOfConfirmPassword)}
        status={errors.confirmPassword && 'error'}
        message={errors.confirmPassword?.message}
        label="confirm password"
        type="password"
      />

      {/* TODO: update status disabled and event click of button component */}
      <Button type="primary" label="Reset password" size="medium" />
    </Form>
  );
};

export default ResetPasswordForm;
