import { IBaseTimestamp, IBaseJWTToken } from '../base';

export interface ILoginResponse extends IBaseJWTToken {
  account: IAccountOfLoginResponse;
  expiresIn: number;
}

export interface IAccountOfLoginResponse extends IBaseTimestamp {
  email: string;
  role: string;
  status: number;
  banner: string;
  avatar: string;
  phone: string;
  firstName: string;
  lastName: string;
  isAuthenticated: number;
}
