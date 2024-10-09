import { paths } from '../constant';
import { IAccountOfLoginResponse, ILoginResponse } from '../types/response';

// Email before register
const saveEmailSignUp: (email: string) => void = (email) => {
  localStorage.setItem(paths.LOCAL_STORAGE.emailRegister, email);
};

const getEmailSignUp: () => string | null = () => {
  const emailSignUp = localStorage.getItem(paths.LOCAL_STORAGE.emailRegister);

  if (emailSignUp) {
    return emailSignUp;
  }

  return null;
};

const removeEmailSignUp: () => void = () => {
  localStorage.removeItem(paths.LOCAL_STORAGE.emailRegister);
};

// save accessToken
const saveAccessToken: (accessToken: string) => void = (accessToken) => {
  localStorage.setItem(paths.LOCAL_STORAGE.accessToken, accessToken);
};

const removeAccessToken: () => void = () => {
  localStorage.removeItem(paths.LOCAL_STORAGE.accessToken);
};

const getAccessToken: () => string | null = () => {
  const accessToken = localStorage.getItem(paths.LOCAL_STORAGE.accessToken);
  return accessToken;
};

// save refreshToken
const saveRefreshToken: (refreshToken: string) => void = (refreshToken) => {
  localStorage.setItem(paths.LOCAL_STORAGE.refreshToken, refreshToken);
};

const getRefreshToken: () => string | null = () => {
  const refreshToken = localStorage.getItem(paths.LOCAL_STORAGE.refreshToken);
  if (refreshToken) return refreshToken;

  return null;
};

const removeRefreshToken: () => void = () => {
  localStorage.removeItem(paths.LOCAL_STORAGE.refreshToken);
};

// Save account
const saveAccount: (dataAccount: IAccountOfLoginResponse) => void = (
  dataAccount,
) => {
  const dataFormat = JSON.stringify(dataAccount);
  localStorage.setItem(paths.LOCAL_STORAGE.account, dataFormat);
};

const getAccount: () => IAccountOfLoginResponse | null = () => {
  const dataAccount = localStorage.getItem(paths.LOCAL_STORAGE.account);
  if (dataAccount) {
    return JSON.parse(dataAccount);
  }

  return null;
};

const removeAccount: () => void = () => {
  localStorage.removeItem(paths.LOCAL_STORAGE.account);
};

// Email forgot password
const saveEmailForgotPassword: (email: string) => void = (email) => {
  localStorage.setItem(paths.LOCAL_STORAGE.emailForgotPassword, email);
};

const getEmailForgotPassword: () => string | null = () => {
  const emailForgotPassword = localStorage.getItem(
    paths.LOCAL_STORAGE.emailForgotPassword,
  );
  if (emailForgotPassword) {
    return emailForgotPassword;
  }

  return null;
};

const removeEmailForgotPassword: () => void = () => {
  localStorage.removeItem(paths.LOCAL_STORAGE.emailForgotPassword);
};

export {
  saveEmailForgotPassword,
  getEmailForgotPassword,
  removeEmailForgotPassword,
  saveEmailSignUp,
  getEmailSignUp,
  removeEmailSignUp,
  saveAccessToken,
  removeAccessToken,
  getAccessToken,
  saveAccount,
  getAccount,
  removeAccount,
  getRefreshToken,
  saveRefreshToken,
  removeRefreshToken,
};