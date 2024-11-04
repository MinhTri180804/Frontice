import { PlusIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/common';
import Paginations from '../../components/common/Paginations';
import Solution from '../../components/common/Solution';
import './MySolution.scss';

const MySolutionPage: React.FC = () => {
  const { t } = useTranslation();

  const mySolutionListClass = classNames('my__solution-list', {});

  return (
    <>
      <div className="container-solution-list-page">
        <div className="header">
          <div className="title">{t('Page.MySolution.Title')}</div>
          <Button
            style={{ width: 'fit-content' }}
            label="Filter"
            buttonSize="small"
            iconPosition="left"
            styleType="secondary"
            Icon={() => <PlusIcon />}
          />
        </div>

        <div className={mySolutionListClass}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Solution
              key={`${index}`}
              titleSolution="Mortgage repayment calculator"
              descriptionSolution="This mortgage calculator is an excellent project for practicing working with forms, client-side validation, and updating the DOM. Remember to focus on accessibility, too!"
              image="https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cw_700%2FChallenges%2Fjxgbqnn2ft6dmecbsvtf.jpg&w=3840&q=75"
              tech={['Html', 'Css', 'Javascript']}
              name="Mortgage repayment calculator"
              time="Submitted 23 minutes ago"
            />
          ))}
        </div>

        <Paginations totalPages={3} currentPage={1} onPageChange={() => {}} />
      </div>
    </>
  );
};
export default MySolutionPage;
