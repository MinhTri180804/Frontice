import { Input } from '../../../../components/common';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import './PersonalInformation.scss';

interface PersonalInformationProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  register,
  errors,
}) => {
  return (
    <div className="container-personal-informations">
      <div className="title-component">Personal Information</div>

      <div className="container-input">
        {/* Row for First Name and Last Name */}
        <div className="row">
          <div className="first">
            <Input
              label="First Name"
              placeholder="Enter your first name"
              {...register('firstName', { required: 'First name is required' })}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName.message}</span>
            )}
          </div>
          <div className="last">
            <Input
              label="Last Name"
              placeholder="Enter your last name"
              {...register('lastName', { required: 'Last name is required' })}
            />
            {errors.lastName && (
              <span className="error">{errors.lastName.message}</span>
            )}
          </div>
        </div>

        {/* Row for Date of Birth and Gender */}
        <div className="row">
          <div className="first">
            <Input
              label="Date of Birth"
              Icon={() => <CalendarIcon />}
              placeholder="01/01/2002"
              {...register('dob', { required: 'Date of birth is required' })}
            />
            {errors.dob && <span className="error">{errors.dob.message}</span>}
          </div>
          <div className="last">
            <label>Gender</label>
            <select {...register('gender', { required: 'Gender is required' })}>
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <span className="error">{errors.gender.message}</span>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div className="mail">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        {/* Bio Field */}
        <div className="bio">
          <div className="title">Bio</div>
          <textarea
            id="bio"
            placeholder="Enter your Bio"
            {...register('bio')}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
