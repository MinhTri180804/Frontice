import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/common';
import { AboutProfileOverview, AccountProfileOverview } from './Partials';
import './profileOverview.scss';
import { FC } from 'react';
import { paths } from '../../../../constant';

const ProfileOverview: FC = () => {
  const navigate = useNavigate();
  const handleButtonViewDetails = () => {
    navigate(`${paths.profile}`);
  };

  const handleButtonChallenges = () => {
    navigate(`${paths.challenges}`);
  };
  return (
    <div className="profile_overview-component">
      <AccountProfileOverview
        className="account__profile-overview"
        avatarUrl="https://www.shutterstock.com/image-vector/vector-illustration-watercolor-style-portrait-600nw-2294597499.jpg"
        name="Nguyễn Minh Trí"
        email="nguyenminhtri1808t@gmail.com"
      />

      <div className="about__list">
        <AboutProfileOverview title="Account" value="Premium" />
        <AboutProfileOverview title="Level" value="Diamond" />
        <AboutProfileOverview title="Score" value="300" />
        <AboutProfileOverview title="Challenge Submit" value="10 Solution" />
      </div>

      <div className="actions">
        <Button
          className="button__view-details"
          styleType="secondary"
          buttonSize="medium"
          label="View Details"
          onClick={handleButtonViewDetails}
        />

        <Button
          className="button__challenges"
          styleType="primary"
          buttonSize="medium"
          label="Challenges"
          onClick={handleButtonChallenges}
        />
      </div>
    </div>
  );
};

export default ProfileOverview;
