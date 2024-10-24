import { create } from 'zustand';
import { IAccountOfLoginResponse } from '../types/response';
import {
  removeAccessToken,
  removeAccount,
  removeRefreshToken,
} from '../utils/localstorage';

type State = {
  account: IAccountOfLoginResponse | null;
  isAuthentication: boolean;
};

type Actions = {
  logout: () => void;
  login: (account: IAccountOfLoginResponse | null) => void;
};

export const useAuthStore = create<State & Actions>((set) => ({
  account: null,
  isAuthentication: false,
  isLogOut: true,
  login: (account) =>
    set(() => ({
      account: account,
      isAuthentication: true,
    })),
  logout: () => {
    removeAccessToken();
    removeRefreshToken();
    removeAccount();
    set(() => ({
      isAuthentication: false,
      account: null,
    }));
  },
}));
