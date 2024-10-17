import { Button } from '../../components/common';
import BannerAndAvatar from './Partials/BannerAndAvatar';
import ContactAndSocial from './Partials/ContactAndSocial/ContactAndSocial';
import PersonalInformation from './Partials/PersonalInformation';
import './SettingsProfilePage.scss';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  avatar: string;
  username: string;
  email: string;
  phone: string;
  facebook: string;
  twitter: string;
}

const SettingsProfilePage: React.FC = () => {
  const {
    register, // register kiem tra loi
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    //nhung props se duoc nhan vao data
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-settings-profile-page">
        <BannerAndAvatar />
        <PersonalInformation register={register} errors={errors} />
        <ContactAndSocial register={register} errors={errors} />
      </div>
      <div className="action-submit-preview">
        <div className="submit">
          <Button
            type="submit"
            label="Submit"
            styleType="primary"
            buttonSize="large"
          />
        </div>
        <div className="preview">
          <Button
            type="button"
            label="Preview"
            styleType="secondary"
            buttonSize="large"
          />
        </div>
      </div>
    </form>
  );
};
export default SettingsProfilePage;
