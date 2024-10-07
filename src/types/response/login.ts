import { IBaseTimestamp, IBaseJWTToken } from '../base';

export interface ILoginResponse extends Pick<IBaseJWTToken, 'accessToken'> {
  account: IAccountOfLoginResponse;
  expiresIn: number;
}

export interface IAccountOfLoginResponse
  extends IBaseTimestamp,
    Pick<IBaseJWTToken, 'refreshToken'> {
  id: string;
  isDeleted: number;
  email: string;
  role: string;
  status: number;
  banner: string;
  avatar: string;
  phone: string;
  firstName: string;
  lastName: string;
  isAuthenticated: number;
  enabled: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
  username: string;
  authorities: {
    authority: string;
  }[];
}
