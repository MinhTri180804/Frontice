import { Button, Input } from '../../../components/common';
import { Line } from '../../../components/common/Line';
import { SocialAuthButton } from '../Partials/SocialAuthButton';
import './login.scss';

const Login: React.FC = () => {
  const handleLoginGoogle = () => {
    console.log('login google');
  };

  const handleLoginGithub = () => {
    console.log('login github');
  };

  return (
    <div className="login__page-container">
      <div className="heading">
        <div className="title">Sign In Account</div>

        <div className="sub-title">
          Enter your email and password to login application
        </div>
      </div>

      <div className="content">
        <div className="method__social">
          <SocialAuthButton social="google" eventClick={handleLoginGoogle} />
          <SocialAuthButton social="github" eventClick={handleLoginGithub} />
        </div>

        <div className="or">
          <Line />
          <div className="or-text">or</div>
          <Line />
        </div>

        <div className="form">
          <Input label="Email" />
          <Input label="Password" />

          <Button type="primary" label="Login" size="medium" />
        </div>
      </div>
    </div>
  );
};

export default Login;
