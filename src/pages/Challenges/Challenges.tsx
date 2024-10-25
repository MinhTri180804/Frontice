import { useState } from 'react';
import { Button, Challenge } from '../../components/common';
import './Challenges.scss';
import { PlusIcon } from '@heroicons/react/24/outline';
import getChallengeService from '../../services/challengeApi';
import { useQuery } from '@tanstack/react-query';
import { IDataChallengeResponse } from '../../types/response/listChallenge';
import Pagination from '../../components/common/Paginations';
const Challenges: React.FC = () => {
  const LIMIT = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage: (currentPage: number) => void = (currentPage) => {
    setCurrentPage(currentPage);
  };
  const {
    isPending,
    data: responseChallenges,
    isError,
  } = useQuery({
    queryKey: ['students', currentPage],
    queryFn: async () => {
      const response = await getChallengeService(currentPage, LIMIT);
      const responseData = response.data.data;
      return responseData;
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }
  console.log('response data: ', responseChallenges);
  return (
    <>
      <div className="container-challenges-page">
        <div className="header">
          <div className="title">Challenges List</div>
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
          {responseChallenges.result &&
            responseChallenges.result.map((challenge, index) => (
              <Challenge key={index} challengeData={challenge} />
            ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={responseChallenges.meta.totalPages}
          onPageChange={handleChangePage}
        />
      </div>
    </>
  );
};
export default Challenges;
