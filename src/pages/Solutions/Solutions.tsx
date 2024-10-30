import { Button } from '../../components/common';
import Solution from '../../components/common/Solution';
import { PlusIcon } from '@heroicons/react/24/outline';
import './Solution.scss';
import image from '../../asset/images/solution.png';
import userAvatar from '../../asset/images/avatar.png';
import React, { useEffect, useState } from 'react';
import Pagination from '../../components/common/Paginations';
import getChallengeService from '../../services/challengeApi';
import { useQuery } from '@tanstack/react-query';
interface DataItemSolution {
  time: string;
  name: string;
  tech: string[];
  id: string;
}
const Solutions: React.FC = () => {
  // const LIMIT = 10; // Số lượng bài đăng hiển thị trên một trang
  // const [dataSolution, setDataSolution] = useState<DataItemSolution[]>([]);
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const handleChangePage: (currentPage: number) => void = (currentPage) => {
  //   setCurrentPage(currentPage);
  // };
  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ['item'],
  //   queryFn: () => getChallengeService(currentPage, LIMIT),
  // });
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (isError) {
  //   return <div>Error fetching data</div>;
  // }
  // console.log('data', data.result); //tra ve data cua tung challenges
  return (
    <>
      <div className="container-solution-list-page">
        <div className="header">
          <div className="title">Solution List</div>
          <Button
            style={{ width: 'fit-content' }}
            label="Filter"
            buttonSize="small"
            iconPosition="left"
            styleType="secondary"
            Icon={() => <PlusIcon />}
          />
        </div>
        <div className="solution-list">
          <div className="cols">
            {dataSolution.map((solutionItem) => (
              <Solution
                key={solutionItem.id}
                image={image} // Hình ảnh mặc định
                name={solutionItem.name}
                time={solutionItem.time}
                tech={solutionItem.tech}
                userAvatar={userAvatar}
              />
            ))}
          </div>
          <div className="cols">
            {dataSolution.map((solutionItem) => (
              <Solution
                key={solutionItem.id}
                image={image} // Hình ảnh mặc định
                name={solutionItem.name}
                time={solutionItem.time}
                tech={solutionItem.tech}
                userAvatar={userAvatar}
                isShowDesc={true}
              />
            ))}
          </div>
          <div className="cols">
            {dataSolution.map((solutionItem) => (
              <Solution
                key={solutionItem.id}
                image={image} // Hình ảnh mặc định
                name={solutionItem.name}
                time={solutionItem.time}
                tech={solutionItem.tech}
                userAvatar={userAvatar}
              />
            ))}
          </div>
          <div className="cols">
            {dataSolution.map((solutionItem) => (
              <Solution
                key={solutionItem.id}
                image={image} // Hình ảnh mặc định
                name={solutionItem.name}
                time={solutionItem.time}
                tech={solutionItem.tech}
                userAvatar={userAvatar}
                isShowDesc
              />
            ))}
          </div>
        </div>
        <Pagination
          totalPages={res}
          currentPage={currentPage}
          onPageChange={handleChangePage}
        />
      </div>
    </>
  );
};
export default Solutions;
