import React from 'react';
import './NotFoundPage.scss';
import PageNotFound from '../../asset/images/page__notfound/404.jpg';
import { Button } from '../../components/common';
import { useNavigate } from 'react-router-dom';
const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <>
      <div className="container-page-not-found">
        <figure>
          <img src={PageNotFound} alt="404 - image" />
          <h2>Not Found</h2>
          <h3>Oops, your force is not strong enough.</h3>
          <p>
            This page you requested could not be found. May the force be with
            you
          </p>
          <Button
            buttonSize="normal"
            styleType="secondary"
            label="Go to HomePage"
            onClick={handleClick}
          />
        </figure>
      </div>
    </>
  );
};

export default NotFound;
