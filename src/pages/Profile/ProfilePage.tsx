import BannerWithInfo from './Partials/BannerWithInfo';
import Solution from './Partials/Solution';
import image from '../../asset/images/solution.png';
import './ProfilePage.scss';

const Profile: React.FC = () => {
  const tech = ['html', 'css', 'js'];
  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <BannerWithInfo />
      <div className="list-solution">
        <Solution
          image={image}
          name="Bento grid"
          time="Submitted about 1 hour ago"
          tech={tech}
        />
      </div>
    </div>
  );
};

export default Profile;
