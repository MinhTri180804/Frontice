import React from 'react';
import { paths } from '../../constant';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthentication, account } = useAuthStore();
  if (account && isAuthentication) {
    return <Navigate to={paths.home} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
