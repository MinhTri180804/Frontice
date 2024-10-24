import React, { useEffect } from 'react';
import './app.scss';
import { QueryProvider, Router, ToastHandler } from './components/wrapper';
import './configs/i18n';
import { paths } from './constant';
import { checkAuthentication } from './utils/helper';
import { useAuthStore } from './store/authStore';
import { getAccount } from './utils/localstorage';

const App: React.FC = () => {
  const { login, logout } = useAuthStore();
  useEffect(() => {
    const checkAuth = checkAuthentication();
    if (checkAuth) {
      const account = getAccount();
      if (account) {
        login(account);
      }
    } else {
      logout();
    }
  }, []);
  return (
    <div className="app-container">
      <QueryProvider>
        <ToastHandler>
          <Router defaultRoute={paths.home} />
        </ToastHandler>
      </QueryProvider>
    </div>
  );
};

export default App;
