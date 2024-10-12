import './RecruiterCompanyPage.scss';
import {
  RecruiterContact,
  RecruiterDescription,
  RecruiterInfo,
  RecruiterProfile,
  SectionAbout,
} from './partials';

const RecruiterCompanyPage: React.FC = () => {
  return (
    <div className="recruiter-company-container">
      <h1 className="recruiter-company-title">Recruiter Company</h1>
      <RecruiterProfile />
      <div className="recruiter-company-content">
        <div className="column left-column">
          <SectionAbout
            className="section__recruiter-info"
            title="Thông tin công ty"
            borderBottomHeading
          >
            <RecruiterInfo />
          </SectionAbout>

          <SectionAbout
            className="section__recruiter-description"
            title="Giới thiệu công ty"
            borderBottomHeading
          >
            <RecruiterDescription />
          </SectionAbout>
        </div>

        <div className="column right-column">
          <SectionAbout
            title="Thông tin liên hệ"
            className="section__recruiter-contact"
            borderBottomHeading
          >
            <RecruiterContact />
          </SectionAbout>
        </div>
      </div>
      <SectionAbout title="Danh sách thử thách">
        <div></div>
      </SectionAbout>
    </div>
  );
};

export default RecruiterCompanyPage;
