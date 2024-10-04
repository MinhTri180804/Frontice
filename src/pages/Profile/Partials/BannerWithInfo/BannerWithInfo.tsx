import './BannerWithInfo.scss';
import Banner from '../../../../asset/images/banner.png';
import Avatar from '../../../../asset/images/avatar.png';
import { Button } from '../../../../components/common';
import { PlusIcon } from '@heroicons/react/24/outline';
const BannerWithInfo: React.FC = () => {
  return (
    <div className="banner-with-info">
      <figure>
        <img src={Banner} alt="banner" />
      </figure>
      <figure>
        <img src={Avatar} alt="avatar" />
        <figcaption>
          <div className="user-header">
            <h1>Username</h1>
            <p>User description</p>
            <span>User location</span>
            <div className="action">
              <Button
                type="secondary"
                label="View CV"
                iconPosition="left"
                size="small"
                Icon={() => <PlusIcon />}
              />
              <Button
                type="primary"
                label="Follow"
                iconPosition="right"
                size="small"
                Icon={() => <PlusIcon />}
              />
            </div>
          </div>
          <div className="user-info"></div>
          <div className="user-info-icon"></div>
          <div className="user-bio"></div>
        </figcaption>
      </figure>
    </div>
  );
};

export default BannerWithInfo;
