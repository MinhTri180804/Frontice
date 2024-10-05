import { BrandWhiteLogo } from '../../../../../assets/logos/locals';
import { StepProcess } from '../../../../../pages/Auth/Partials/StepProcess';
import './authWelcome.scss';
import { FC } from 'react';

const AuthWelcome: FC = () => {
  // TODO: add feature render title, message, and step based on route url

  return (
    <div className="auth__welcome-container">
      <div className="content">
        <div className="heading">
          <div className="logo">
            <img src={BrandWhiteLogo} alt="frontice logo" />
          </div>

          <div className="content">
            <div className="title">Get Started with Us</div>
            <div className="message">
              complete these easy steps to login your account
            </div>
          </div>
        </div>
        <div className="steps">
          <StepProcess
            stepNumber={1}
            stepContent="Enter your account email"
            isActive={true}
          />
          <StepProcess
            stepNumber={2}
            stepContent="Go to application"
            isActive={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthWelcome;
