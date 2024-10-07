import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';
import { Button, Input } from '../../../components/common';
import { usePreviousPage } from '../../../hooks';
import './forgotPassword.scss';

const ForgotPasswordPage: FC = () => {
  const previousPage = usePreviousPage();
  const handlePrevPage = () => {
    previousPage();
  };
  return (
    <div className="forgot__password__page-container">
      <div className="heading">
        <div className="title">forgot password</div>

        <div className="sub-title">Enter your email to find account</div>
      </div>

      <div className="content">
        {/*TODO: Create then implement form component in here */}
        <div className="main__content">
          <div className="form">
            {/* TODO: update status disabled and event click of button component */}
            <Input label="email" type="email" />
            <Button type="primary" label="Forgot password" size="medium" />
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

export default ForgotPasswordPage;
