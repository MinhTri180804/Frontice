import axios from 'axios';
import { IlistChallengeResponse } from '../types/response/listChallenge';
import { IBaseResponse } from '../types/base';
const getChallengeService = async (page: number, limit: number) => {
  return axios.get<IBaseResponse<IlistChallengeResponse>>(
    `https://front-ice-platform-production.up.railway.app/api/v1/challenges`,
    {
      params: { _page: page, _limit: limit },
    },
  );
};

export default getChallengeService;
