import axios from 'axios';
import { IChallengeDetailResponse } from '../types/response/detailChallenge';
import { IBaseResponse } from '../types/base';

const getChallengeDetailService = async (id: string) => {
  const response = axios.get<IBaseResponse<IChallengeDetailResponse>>(
    `https://front-ice-platform-production.up.railway.app/api/v1/challenges/${id}`,
  );
  return response;
};

export default getChallengeDetailService;
