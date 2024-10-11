import './RecruiterProfile.scss';
import { RecruiterLogo } from '../../../../assets/images';
import { ListIcon, AddressIcon, PlusIcon } from '../../../../assets/icons';
import { Button } from '../../../../components/common';

const RecruiterProfile: React.FC = () => {
  return (
    <div className="recruiter-profile-container">
      <img className='left-content' src={RecruiterLogo} alt="recruiter-logo" />
      <div className='right-content'>
        <div className='recruiter-profile-info'>
          <div className='recruiter-name'>
            NAB Innovation Centre Vietnam
          </div>
          <div className='recruiter-detail'>
            <div className='recruiter-address'>
              <AddressIcon width={24} height={24} stroke='#fff' />
              <span>Thành phố Hồ Chí Minh, Việt Nam</span>
            </div>
            <div className='recruiter-challenge-numbers'>
              <ListIcon width={24} height={24} stroke='#fff' />
              <span>Có 11 challenge</span>
            </div>
          </div>
        </div>
        <div className='recruiter-btn-container'>
          <div className='recruiter-btn'>
            <Button label='Challenges' type='secondary' size='medium' />
          </div>
          <div className='recruiter-btn active'>
            <Button label='Theo dõi' type='secondary' size='medium' Icon={PlusIcon} iconPosition='left' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterProfile;
