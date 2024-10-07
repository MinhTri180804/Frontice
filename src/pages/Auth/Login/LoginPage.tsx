import { Link } from 'react-router-dom';
import { Button, Input } from '../../../components/common';
import { Checkbox } from '../../../components/common/Checkbox';
import { Line } from '../../../components/common/Line';
import { SocialAuthButton } from '../Partials/SocialAuthButton';
import './login.scss';
import { paths } from '../../../constant';

const Login: React.FC = () => {
  const handleLoginGoogle = () => {
    console.log('login google');
  };

  const handleLoginGithub = () => {
    console.log('login github');
  };

  const handleRememberAccount: () => void = () => {
    console.log('Remember account');
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

        {/*TODO: Create then implement form component in here */}
        <div className="main__content">
          <div className="form">
            <Input label="Email" placeholder="Enter your email..." />
            {/* TODO: implement input password component in here */}
            <Input label="Password" placeholder="Enter your password..." />
            <div className="options">
              <Checkbox
                label="Remember password"
                eventChecked={handleRememberAccount}
              />

              <Link
                to={`${paths.auth}/${paths.forgotPassword}`}
                className="forgot-password"
              >
                forgot password ?
              </Link>
            </div>
            {/* TODO: update status disabled and event click of button component */}
            <Button type="primary" label="Login" size="medium" />
          </div>

          <div className="other">
            <span>
              You don't have an account yet?
              <Link to={`${paths.auth}/${paths.register}`}>Register</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
