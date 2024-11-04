import axios from 'axios';
import { IProfileResponse } from '../types/response/profile';
import { IBaseResponse } from '../types/base';
const getProfileService = async () => {
  return axios.get<IBaseResponse<IProfileResponse>>(
    `https://front-ice-platform-production.up.railway.app/api/v1/challenger/profile`,
  );
};

// FIXME:
export default getProfileService;
