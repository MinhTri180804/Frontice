import { FC } from 'react';
import './resetPassword.scss';
import { Button, Input } from '../../../components/common';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { usePreviousPage } from '../../../hooks';

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
          <div className="form">
            <Input label="Password " type="password" />
            <Input label="Password confirm" type="password" />

            {/* TODO: update status disabled and event click of button component */}
            <Button type="primary" label="Reset password" size="medium" />
          </div>

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
