import React from 'react';
import { QueryProvider, Router, ToastHandler } from './components/wrapper';
import { paths } from './constant';
import './app.scss';
import './configs/i18n';

const App: React.FC = () => {
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
