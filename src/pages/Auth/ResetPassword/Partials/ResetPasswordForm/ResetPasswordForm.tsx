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

const ResetPasswordForm: FC = () => {
  const {
    register,
    formState: { errors },
    control,
    getValues,
  } = useForm<IResetPasswordRequest>({
    defaultValues: { resetToken: '123123' },
  });

  const handleResetPasswordSuccess = () => {
    console.log('success');
  };

  const handleResetPasswordError = () => {
    console.log('Error');
  };

  const handleResetPassword: FormSubmitHandler<IResetPasswordRequest> = (
    data,
  ) => {
    console.log(data);
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
      onSuccess={handleResetPasswordSuccess}
      onError={handleResetPasswordError}
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
