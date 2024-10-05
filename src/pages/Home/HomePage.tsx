import { SocialAuthButton } from '../Auth/Partials/SocialAuthButton/SocialAuthButton';
import './homePage.scss';

const Home: React.FC = () => {
  const testing = () => {
    console.log('click');
  };
  return (
    <div className="home-container">
      <h1>Home Page</h1>

      <div className="flex">
        <SocialAuthButton social="google" eventClick={testing} />
        <SocialAuthButton social="github" eventClick={testing} />
      </div>
    </div>
  );
};

export default Home;
