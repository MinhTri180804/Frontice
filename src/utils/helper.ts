import { paths } from '../constant';
import { useAuthStore } from '../store/authStore';
import { IAccountOfLoginResponse } from '../types/response';
import { jwtDecode } from 'jwt-decode';

const i18nHelper = {
  getLanguageSystemStaff: () => {
    const language = navigator.language;
    const [firstKeyLanguage] = language.split('-');
    return firstKeyLanguage;
  },
};

const checkAuthentication: () => boolean = () => {
  const refreshToken = localStorage.getItem(paths.LOCAL_STORAGE.refreshToken);
  const account = localStorage.getItem(paths.LOCAL_STORAGE.account);

  if (!refreshToken || !account) {
    return false;
  }
  const refreshTokenValidity = checkRefreshTokenValidity(refreshToken);

  if (!refreshTokenValidity) {
    return false;
  }

  return true;
};

const checkRefreshTokenValidity: (refreshToken: string) => boolean = (
  refreshToken,
) => {
  const decodeRefreshToken = jwtDecode(refreshToken);
  const currentTime = Date.now() / 1000;

  if (typeof decodeRefreshToken.exp !== 'number') {
    return false;
  }

  if (decodeRefreshToken.exp < currentTime) {
    return false;
  }

  return true;
};

export { i18nHelper, checkAuthentication, checkRefreshTokenValidity };
