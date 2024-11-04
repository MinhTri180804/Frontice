import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Navigate,
  RouteObject,
  useLocation,
  useRoutes,
} from 'react-router-dom';
import routes from '../../configs/routes';
import { paths } from '../../constant';
import { LoadingPage } from '../../pages';
import { AppLayout } from '../layout/app';

export interface RouterProps {
  defaultRoute: string;
}

export function Routes(props: RouterProps) {
  const { defaultRoute } = props;
  console.log(defaultRoute);
  const location = useLocation();

  // Check for stored path in localStorage
  // const storedPath = localStorage.getItem('path');
  const redirectPath = paths.home;

  useEffect(() => {
    document.querySelector('main')?.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  const defaultRouteObject: RouteObject = {
    index: true,
    path: '/',
    element: <Navigate to={redirectPath} />,
  };

  const defaultRouteAuthObject: RouteObject = {
    index: true,
    path: '/auth',
    element: <Navigate to={`${paths.auth}/${paths.login}`} />,
  };

  const elements = useRoutes([
    defaultRouteObject,
    defaultRouteAuthObject,
    ...routes,
  ]);

  return (
    <React.Suspense
      fallback={
        <AppLayout>
          <LoadingPage />
        </AppLayout>
      }
    >
      {elements}
    </React.Suspense>
  );
}

function Router(props: RouterProps) {
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  );
}

export default Router;
