import './RecruiterCompanyPage.scss';
import {
  RecruiterProfile,
  RecruiterInfo,
  RecruiterDescription,
} from "./partials"

const RecruiterCompanyPage: React.FC = () => {
  return (
    <div className="recruiter-company-container">
      <RecruiterProfile/>
      <RecruiterInfo/>
      <RecruiterDescription/>
      <div className='preview-component'>
        <h1>Preview Component</h1>
      </div>
      <div className='challenge-list-component'>
        <h1>Challenge List</h1>
      </div>
    </div>
  );
};

export default RecruiterCompanyPage;
