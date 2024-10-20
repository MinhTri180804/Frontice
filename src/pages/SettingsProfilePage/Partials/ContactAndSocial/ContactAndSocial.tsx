import { Input } from '../../../../components/common';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import './ContactAndSocial.scss';
interface ContactAndSocialProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}
const ContactAndSocial: React.FC<ContactAndSocialProps> = ({
  register,
  errors,
}) => {
  return (
    <div className="container-contact-social">
      <div className="title-component" id="contact-social-section">
        Contact & Social
      </div>
      <div className="container-input">
        <div className="codepen" id="codepen">
          <Input
            label="Codepen"
            type="text"
            placeholder="Enter your link codepen..."
            {...register('codepen', { required: 'Codepen name is required' })}
            status={errors.codepen && 'error'}
            message={errors.codepen?.message || 'errrors'}
          />
        </div>
        <div className="gitlab" id="gitlab">
          <Input
            label="Gitlab"
            type="text"
            placeholder="Enter your link account gitlab ..."
            {...register('gitlab', { required: 'Gitlab is required' })}
          />
          {errors.gitlab && (
            <span className="error">{errors.gitlab.message}</span>
          )}
        </div>
        <div className="linkedin" id="linkedin">
          <Input
            label="Linkedin"
            type="text"
            placeholder="Enter your link Linkedin..."
            {...register('linkedin', { required: 'Linkedin is required' })}
          />
          {errors.linkedin && (
            <span className="error">{errors.linkedin.message}</span>
          )}
        </div>
        <div className="stack-overflow" id="stackoverflow">
          <Input
            label="Stack Overflow"
            type="text"
            id="stackoverflow"
            placeholder="Enter your link StackOverFlow..."
            {...register('stackOverflow', {
              required: 'stackOverflow name is required',
            })}
          />
          {errors.stackOverflow && (
            <span className="error">{errors.stackOverflow.message}</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default ContactAndSocial;
