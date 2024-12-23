import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/common';
import { AboutProfileOverview, AccountProfileOverview } from './Partials';
import './profileOverview.scss';
import { FC } from 'react';
import { paths } from '../../../../constant';
import { IProfileEntity } from '../../../../types/entity';

interface IProfileOverviewProps {
  profile: IProfileEntity;
}

const ProfileOverview: FC<IProfileOverviewProps> = ({ profile }) => {
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
        avatarUrl={
          profile?.accountResponse?.avatar ||
          'https://www.shutterstock.com/image-vector/vector-illustration-watercolor-style-portrait-600nw-2294597499.jpg'
        }
        name={`${profile.firstName} ${profile.lastName}`}
        email={profile.email}
      />

      <div className="about__list">
        <AboutProfileOverview
          title="Account"
          value={profile.isPremium === 1 ? 'Premium' : 'Normal'}
        />
        <AboutProfileOverview title="Level" value={profile?.level} />
        <AboutProfileOverview title="Score" value={profile?.score} />
        <AboutProfileOverview
          title="Challenge Submit"
          value={`${profile?.totalSubmittedChallenge} Solution`}
        />
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
