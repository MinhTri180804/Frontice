import { Outlet } from 'react-router-dom';
import './authLayout.scss';
import { FC } from 'react';
import { AuthWelcome } from './Partials/AuthWelcome';
import { AuthForm } from './Partials/AuthForm';

const AuthLayout: FC = () => {
  return (
    <div className="auth__layout-container">
      <div className="wrap">
        <div className="auth__welcome-section">
          <AuthWelcome />
        </div>
        <div className="auth__form-section">
          <AuthForm>
            <Outlet />
          </AuthForm>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
