import { useQuery } from '@tanstack/react-query';
import { Challenge } from '../../components/common';
import './RecruiterCompanyPage.scss';
import {
  RecruiterContact,
  RecruiterDescription,
  RecruiterInfo,
  RecruiterProfile,
  SectionAbout,
} from './partials';
import { useState } from 'react';
import getChallengeRecruiter from '../../services/recruiterChallengeApi';

const RecruiterCompanyPage: React.FC = () => {
  const [currentPage] = useState(1);
  const LIMIT = 10;
  const {
    isLoading,
    data: responseChallengesRecruiter,
    isError,
  } = useQuery({
    queryKey: ['challenge', currentPage],
    queryFn: async () => {
      const response = await getChallengeRecruiter(currentPage, LIMIT);
      const responseData = response?.data?.data;
      return responseData;
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }
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
      <SectionAbout className="challenge__list" title="Danh sách thử thách">
        <div className="challenge__list-content">
          {responseChallengesRecruiter?.result &&
            responseChallengesRecruiter?.result.map((challenge, index) => (
              <Challenge key={index} challengeData={challenge} />
            ))}
        </div>
      </SectionAbout>
    </div>
  );
};

export default RecruiterCompanyPage;
