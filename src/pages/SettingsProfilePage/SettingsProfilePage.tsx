import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/common';
import TableContents from '../../components/common/TableContents';
import BannerAndAvatar from './Partials/BannerAndAvatar';
import ContactAndSocial from './Partials/ContactAndSocial/ContactAndSocial';
import PersonalInformation from './Partials/PersonalInformation';
import './SettingsProfilePage.scss';

interface FormData {
  avatar: string;
  username: string;
  email: string;
  phone: string;
  facebook: string;
  twitter: string;
}

const sectionsData = [
  {
    title: 'Banner & Avatar',
    href: '#banner-avatar-section',
    subsections: [
      { title: 'Banner', href: '#banner' },
      { title: 'Avatar', href: '#avatar' },
    ],
  },
  {
    title: 'Personal Information',
    href: '#personal-info-section',
    subsections: [
      { title: 'First name & Last name', href: '#name' },
      { title: 'Dob & Gender', href: '#dob-gender' },
      { title: 'Email', href: '#email' },
      { title: 'Bio', href: '#bio' },
    ],
  },
  {
    title: 'Contact & Social',
    href: '#contact-social-section',
    subsections: [
      { title: 'Codepen', href: '#codepen' },
      { title: 'Gitlab', href: '#gitlab' },
      { title: 'Linkedin', href: '#linkedin' },
      { title: 'Stackoverflow', href: '#stackoverflow' },
    ],
  },
];

const SettingsProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const { handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="container-settings-profile-page">
      <div className="settings-profile-page-title">{t('Settings Profile')}</div>
      <div className="form-filter">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="main-settings-profile-page">
            <BannerAndAvatar />
            <PersonalInformation
            // register={register} errors={errors}
            />
            <ContactAndSocial
            // register={register} errors={errors}
            />
          </div>
          <div className="action-submit-preview">
            <div className="submit">
              <Button
                type="submit"
                label={t('Save Settings')}
                styleType="primary"
                buttonSize="large"
              />
            </div>
            <div className="preview">
              <Button
                type="button"
                label={t('Preview')}
                styleType="secondary"
                buttonSize="large"
              />
            </div>
          </div>
        </form>
        <div className="filter">
          <TableContents sections={sectionsData} />
        </div>
      </div>
    </div>
  );
};
export default SettingsProfilePage;
