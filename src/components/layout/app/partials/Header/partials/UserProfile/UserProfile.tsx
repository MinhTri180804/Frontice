import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import {
  NotificationIcon,
  UpAndDownIcon,
} from '../../../../../../../assets/icons';
import { DefaultAvatar } from '../../../../../../../assets/images';
import { IOptionLanguage } from '../../../../../../../types/entity';
import { IOptionSelectItem } from '../../../../../../../types/entity/components';
import { OptionSelect } from '../../../../../../common';
import { Dropdown } from './partials';
import './UserProfile.scss';

const UserProfile: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const languageOptions: IOptionSelectItem[] = [
    {
      displayContent: `🇻🇳 ${t('Language.Vietnamese')}`,
      optionValue: 'vi' as IOptionLanguage,
    },

    {
      displayContent: `🇺🇸 ${t('Language.English')}`,
      optionValue: 'en' as IOptionLanguage,
    },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleSetDefaultOptionLanguage: () => IOptionSelectItem = () => {
    const language = i18n.language as IOptionLanguage;
    if (language === 'vi') {
      return languageOptions[0];
    }

    if (language === 'en') {
      return languageOptions[1];
    }

    return languageOptions[1];
  };

  const selectOptionLanguage: (optionValue: string) => void = (optionValue) => {
    const optionLanguageValue = optionValue as IOptionLanguage;
    i18n.changeLanguage(optionLanguageValue);

    if (optionLanguageValue === 'en') {
      toast.success(
        t('ChangeLanguage.success', {
          language: t('Language.English'),
        }),
      );
    }

    if (optionLanguageValue === 'vi') {
      toast.success(
        t('ChangeLanguage.success', {
          language: t('Language.Country'),
        }),
      );
    }
  };

  return (
    <div className="user-profile-container">
      <div className="option">
        <OptionSelect
          style={{
            width: '200px',
          }}
          handleSelect={selectOptionLanguage}
          defaultOptionSelect={handleSetDefaultOptionLanguage()}
          options={languageOptions}
        />
      </div>

      <div className="notification-icon">
        <NotificationIcon width={24} height={24} />
      </div>
      <div className="user-profile">
        <div className="user-avatar">
          <img
            src={DefaultAvatar}
            alt={t('Layout.Header.UserProfile.avatar')}
          />
        </div>
        <div className="user-info">
          <div className="user-name">
            {t('Layout.Header.UserProfile.userName')}
          </div>
          <div className="user-id">#id</div>
        </div>
        <div className="drop-down" onClick={toggleDropdown}>
          <UpAndDownIcon width={24} height={24} stroke="black" />
        </div>
      </div>
      <Dropdown isOpen={isDropdownOpen} />
    </div>
  );
};

export default UserProfile;
