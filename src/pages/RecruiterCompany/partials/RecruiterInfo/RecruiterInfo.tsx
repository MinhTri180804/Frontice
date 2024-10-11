import { RecruiterModel } from './partials';
import './RecruiterInfo.scss';

const RecruiterInfo: React.FC = () => {
  return (
    <div className="recruiter-info-container">
      <div className='recruiter-info-title'>
        <span>Thông tin công ty</span>
      </div>
      <div className='recruiter-info-model'>
        <RecruiterModel />
        <RecruiterModel />
        <RecruiterModel />
        <RecruiterModel />
        <RecruiterModel />
        <RecruiterModel />
      </div>
    </div>
  );
};

export default RecruiterInfo;
