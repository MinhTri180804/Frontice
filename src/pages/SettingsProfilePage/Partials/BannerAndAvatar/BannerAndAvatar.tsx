import './BannerAndAvatar.scss';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import BannerPathImage from '../../../../asset/images/banner.png';
import AvatarPathImage from '../../../../asset/images/avatar.png';
import { Input } from '../../../../components/common';

const BannerAndAvatar: React.FC = () => {
  return (
    <div className="container-banner-avatar">
      <div className="title-component">Banner &amp; Avatar</div>
      <div className="title-banner">Banner</div>
      <div className="container-banner">
        <div className="image">
          <img src={BannerPathImage} alt="" />
        </div>
        <div className="action">
          <input
            type="file"
            id="uploadFileBanner"
            name="myfile"
            title="Please upload your file"
          />
          <label htmlFor="uploadFileBanner">
            <ArrowUpTrayIcon />
            <p>Upload file</p>
          </label>
        </div>
      </div>
      <div className="title-avatar">Avatar</div>
      <div className="container-avatar">
        <div className="image-action">
          <div className="image">
            <img src={AvatarPathImage} alt="" />
          </div>
          <div className="action">
            <input
              type="file"
              id="uploadFileAvatar"
              name="myfile"
              title="Please upload your file"
            />
            <label htmlFor="uploadFileAvatar">
              <ArrowUpTrayIcon />
              <p>Upload file</p>
            </label>
          </div>
        </div>
        <div className="container-input">
          <div className="input-child">
            <Input
              label="GitHub"
              status="default"
              placeholder="Enter your link Github account..."
            />
            <Input
              label="Google"
              status="default"
              placeholder="Enter your mail..."
            />
            <Input
              label="Portfolio"
              status="default"
              placeholder="Enter your portfolio..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerAndAvatar;
