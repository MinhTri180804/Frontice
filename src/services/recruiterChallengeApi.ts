import axios, { AxiosResponse } from 'axios';
import { IlistChallengeResponse } from '../types/response/listChallenge';
import { IBaseResponse } from '../types/base';

const getChallengeRecruiter = async (
  page: number,
  limit: number,
): Promise<AxiosResponse<IBaseResponse<IlistChallengeResponse>> | null> => {
  try {
    const response = await axios.get<IBaseResponse<IlistChallengeResponse>>(
      `https://front-ice-platform-production.up.railway.app/api/v1/challenges`,
      {
        params: { _page: page, _limit: limit },
        timeout: 5000,
      },
    );
    return response;
  } catch (error) {
    console.error('Error fetching challenges:', error);
    return null;
  }
};
export default getChallengeRecruiter;
