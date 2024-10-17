import { IBaseTimestamp, IBaseJWTToken } from '../base';

export interface ILoginResponse extends IBaseJWTToken {
  account: IAccountOfLoginResponse;
  expiresIn: number;
}

export interface IAccountOfLoginResponse extends IBaseTimestamp {
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
