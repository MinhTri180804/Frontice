import './RecruiterCompanyPage.scss';
import {
  RecruiterProfile,
  RecruiterInfo,
  RecruiterDescription,
  RecruiterContact,
} from "./partials"

const RecruiterCompanyPage: React.FC = () => {
  return (
    <div className="recruiter-company-container">
      <h1 className='recruiter-company-title'>Recruiter Company</h1>
      <RecruiterProfile />
      <div className="recruiter-company-content">
        <div className="left-column">
          <RecruiterInfo />
          <RecruiterDescription />
        </div>
        <div className="right-column">
          <RecruiterContact />
        </div>
      </div>
      <div className='challenge-list-component'>
        <h2>Challenges List</h2>
        {/* Add challenge list content here */}
      </div>
    </div>
  );
};

export default RecruiterCompanyPage;
