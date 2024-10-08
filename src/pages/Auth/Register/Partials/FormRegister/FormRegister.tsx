import { FC } from 'react';
import './formRegister.scss';
import { Button, Input } from '../../../../../components/common';
import {
  FormSubmitHandler,
  useForm,
  Form,
  RegisterOptions,
} from 'react-hook-form';
import { IRegisterRequest } from '../../../../../types/request/register';

const FormRegister: FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<Omit<IRegisterRequest, 'role'>>();

  const handleRegister: FormSubmitHandler<IRegisterRequest> = async (data) => {
    console.log(data);
  };

  const ruleOfFirstName: RegisterOptions<IRegisterRequest> = {
    required: {
      value: true,
      message: 'First name is not empty',
    },
  };

  const ruleOfLastName: RegisterOptions<IRegisterRequest> = {
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
      value: 6,
      message: 'Length password less than 6',
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
  };

  return (
    <Form onSubmit={handleRegister}>
      <div className="input-group">
        <Input
          {...register('firstName', ruleOfFirstName)}
          status={errors.firstName && 'error'}
          message={errors.firstName?.message}
          label="first name"
          placeholder="Enter your first name..."
        />
        {/* TODO: implement input password component in here */}
        <Input label="last name" placeholder="Enter your last name..." />
        {/* TODO: update status disabled and event click of button component */}
      </div>
      <Input label="Email" placeholder="Enter your email..." />
      <Input label="password" placeholder="Enter your password..." />
      <Input
        label="password confirm"
        placeholder="Enter your password confirm..."
      />

      <Button type="primary" label="Register" size="medium" />
    </Form>
  );
};

export default FormRegister;
