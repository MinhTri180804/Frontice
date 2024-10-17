import { axiosClient } from '../axios';
import { paths } from '../constant';
import { IBaseResponse } from '../types/base';
import { IRefreshTokenRequest } from '../types/request';
import { IForgotPasswordRequest } from '../types/request/forgotPassword';
import { ILoginRequest } from '../types/request/login';
import { IRegisterRequest } from '../types/request/register';
import { IResetPasswordRequest } from '../types/request/resetPassword';
import { ISendOtpRequest } from '../types/request/sendOtp';
import { IVerifyEmailRequest } from '../types/request/verifyEmail';
import { IVerifyForgotPassword } from '../types/request/verifyForgotPasswordOtp';
import { ILoginResponse, IRefreshTokenResponse } from '../types/response';
import { ISignUpResponse } from '../types/response/signUp';

const BASE_URL = `${paths.API.root}${paths.API.AUTH.root}`;

const authService = {
  login: (data: ILoginRequest) => {
    return axiosClient.post<IBaseResponse<ILoginResponse>>(
      `${BASE_URL}${paths.API.AUTH.login}`,
      data,
    );
  },
  signUp: (data: IRegisterRequest) => {
    return axiosClient.post<IBaseResponse<ISignUpResponse>>(
      `${BASE_URL}${paths.API.AUTH.register}`,
      data,
    );
  },

  forgotPassword: (data: IForgotPasswordRequest) => {
    return axiosClient.post<IBaseResponse<string>>(
      `${BASE_URL}${paths.API.AUTH.forgot_password}`,
      data,
    );
  },

  resetPassword: (data: IResetPasswordRequest) => {
    return axiosClient.post<IBaseResponse<string>>(
      `${BASE_URL}${paths.API.AUTH.reset_password}`,
      data,
    );
  },

  sendOTP: (data: ISendOtpRequest) => {
    return axiosClient.post<IBaseResponse<string>>(
      `${BASE_URL}${paths.API.AUTH.send_otp}?gmail=${data.gmail}`,
    );
  },

  verifyEmailSignup: (data: IVerifyEmailRequest) => {
    return axiosClient.post<IBaseResponse<string>>(
      `${BASE_URL}${paths.API.AUTH.verify_email}`,
      data,
    );
  },

  verifyForgotPasswordOTP: (data: IVerifyForgotPassword) => {
    return axiosClient.post<IBaseResponse<string>>(
      `${BASE_URL}${paths.API.AUTH.verify_forgot_password_otp}`,
      data,
    );
  },

  refreshToken: (data: IRefreshTokenRequest) => {
    return axiosClient.post<IBaseResponse<IRefreshTokenResponse>>(
      `${BASE_URL}${paths.API.AUTH.refreshToken}`,
      data,
    );
  },
};

export default authService;
