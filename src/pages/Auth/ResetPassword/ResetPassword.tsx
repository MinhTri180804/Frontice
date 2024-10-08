import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';
import { usePreviousPage } from '../../../hooks';
import './resetPassword.scss';
import { ResetPasswordForm } from './Partials/ResetPasswordForm';

const ResetPasswordPage: FC = () => {
  const previousPage = usePreviousPage();

  const handlePrevPage = () => {
    // TODO: Implement handle open popup warning if checkout reset password page
    previousPage();
  };
  return (
    <div className="reset__password__page-container">
      <div className="heading">
        <div className="title">reset password</div>

        <div className="sub-title">
          Enter your new password to reset password to account
        </div>
      </div>

      <div className="content">
        {/*TODO: Create then implement form component in here */}
        <div className="main__content">
          <ResetPasswordForm />

          <div className="other">
            <div onClick={handlePrevPage} className="prev-page">
              <div className="icon">
                <ChevronLeftIcon />
              </div>
              <span>Return to previous page</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
