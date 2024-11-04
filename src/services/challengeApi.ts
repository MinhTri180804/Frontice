import axios from 'axios';
import { IlistChallengeResponse } from '../types/response/listChallenge';
import { IBaseResponse } from '../types/base';

const getChallengeService = async (pageNo: number, pageSize: number) => {
  return axios.get<IBaseResponse<IlistChallengeResponse>>(
    `https://front-ice-platform-production.up.railway.app/api/v1/challenges`,
    {
      params: { pageNo, pageSize },
    },
  );
};

export default getChallengeService;
