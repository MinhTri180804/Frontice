import { useState } from 'react';
import { Button, Challenge } from '../../components/common';
import './ChallengesRecruiter.scss';
import { PlusIcon } from '@heroicons/react/24/outline';
import getChallengeService from '../../services/challengeApi';
import { useQuery } from '@tanstack/react-query';
import Pagination from '../../components/common/Paginations';
import { useTranslation } from 'react-i18next';
import { ChallengeSkeleton } from '../../components/skeleton';
const ChallengesRecruiter: React.FC = () => {
  const { t } = useTranslation();
  const LIMIT = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage: (currentPage: number) => void = (currentPage) => {
    setCurrentPage(currentPage);
  };
  const {
    isPending,
    data: responseChallenges,
    isError,
  } = useQuery({
    queryKey: ['challengeRecruiter', currentPage],
    queryFn: async () => {
      const response = await getChallengeService(currentPage, LIMIT);
      const responseData = response.data.data;
      return responseData;
    },
  });
  console.log('current page: ' + currentPage);
  if (isError) {
    return <div>Error fetching data</div>;
  }
  console.log('response data: ', responseChallenges);
  return (
    <>
      <div className="container-challenges-page">
        <div className="header">
          <div className="title">{t('Challenges List')}</div>
          <Button
            style={{ width: 'fit-content' }}
            label="Filter"
            buttonSize="small"
            iconPosition="left"
            styleType="secondary"
            Icon={() => <PlusIcon />}
          />
        </div>
        <div className="challenges-list">
          {isPending
            ? Array.from({ length: LIMIT }).map((_, index) => (
                <div className="challenge-skeleton_component-container">
                  <ChallengeSkeleton key={index} />
                </div>
              ))
            : responseChallenges.result.map((challenge, index) => (
                <Challenge key={index} challengeData={challenge} />
              ))}
          {}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={responseChallenges?.meta.totalPages || 0}
          onPageChange={handleChangePage}
        />
      </div>
    </>
  );
};
export default ChallengesRecruiter;
