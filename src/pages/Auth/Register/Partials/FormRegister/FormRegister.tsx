import { FC } from 'react';
import {
  Form,
  FormSubmitHandler,
  RegisterOptions,
  useForm,
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Input } from '../../../../../components/common';
import { paths } from '../../../../../constant';
import authService from '../../../../../services/authServices';
import { IRegisterRequest } from '../../../../../types/request/register';
import './formRegister.scss';

const FormRegister: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    getValues,
    control,
    formState: { errors },
  } = useForm<IRegisterRequest>();

  const handleRegister: FormSubmitHandler<IRegisterRequest> = async (data) => {
    const formData: IRegisterRequest = {
      ...data.data,
      role: 'CHALLENGER',
    };

    toast.promise(
      authService
        .signUp(formData)
        .then((response) => {
          if (response.status === 200) {
            return navigate(`${paths.auth}/${paths.otp}`, {
              state: {
                emailSignUp: response.data.data.email,
              },
            });
          } else {
            throw new Error('Unexpected response');
          }
        })
        .catch((error) => {
          console.log(error);
          throw error;
        }),
      {
        pending: 'Đang xử lí đăng kí',
        success: 'Đăng kí tài khoản thành công',
        error: 'Đăng kí tài khoản thất bại',
      },
    );
  };
  const ruleOfFirstName: RegisterOptions<IRegisterRequest, 'firstName'> = {
    required: {
      value: true,
      message: 'First name is not empty',
    },
  };

  const ruleOfLastName: RegisterOptions<IRegisterRequest, 'lastName'> = {
    required: {
      value: true,
      message: 'Last name is not empty',
    },
  };

  const ruleOfEmail: RegisterOptions<IRegisterRequest, 'email'> = {
    required: {
      value: true,
      message: 'Email is not empty',
    },

    pattern: {
      // eslint-disable-next-line no-useless-escape
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: 'Email is not valid',
    },
  };

  const ruleOfPassword: RegisterOptions<IRegisterRequest, 'password'> = {
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
    IRegisterRequest,
    'confirmPassword'
  > = {
    required: {
      value: true,
      message: 'Password confirm is not empty',
    },

    minLength: {
      value: 8,
      message: 'Length password less than 8',
    },
    validate: (value) => {
      return value === getValues('password') || 'Passwords do not match';
    },
  };

  return (
    <Form
      className="form__register"
      control={control}
      onSubmit={handleRegister}
    >
      <div className="input-group">
        <Input
          {...register('firstName', ruleOfFirstName)}
          status={errors.firstName && 'error'}
          message={errors.firstName?.message}
          label="first name"
          placeholder="Enter your first name..."
        />
        {/* TODO: implement input password component in here */}
        <Input
          {...register('lastName', ruleOfLastName)}
          status={errors.lastName && 'error'}
          message={errors.lastName?.message}
          label="last name"
          placeholder="Enter your last name..."
        />
      </div>
      <Input
        {...register('email', ruleOfEmail)}
        status={errors.email && 'error'}
        message={errors.email?.message}
        label="Email"
        placeholder="Enter your email..."
      />
      <Input
        {...register('password', ruleOfPassword)}
        status={errors.password && 'error'}
        message={errors.password?.message}
        label="password"
        placeholder="Enter your password..."
        type="password"
      />
      <Input
        {...register('confirmPassword', ruleOfConfirmPassword)}
        status={errors.confirmPassword && 'error'}
        message={errors.confirmPassword?.message}
        label="password confirm"
        placeholder="Enter your password confirm..."
        type="password"
      />

      <Button styleType="primary" label="Register" buttonSize="medium" />
    </Form>
  );
};

export default FormRegister;
