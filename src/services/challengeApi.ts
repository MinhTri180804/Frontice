import axios from 'axios';
const getChallengeService = async (page: number, limit: number) => {
  const response = await axios.get(
    `https://front-ice-platform-production.up.railway.app/api/v1/challenges`,
    {
      params: { _limit: limit, _page: page },
    },
  );
  return response.data.data;
};

export default getChallengeService;
