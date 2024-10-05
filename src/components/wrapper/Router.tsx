import React from 'react';
import {
  BrowserRouter,
  useRoutes,
  RouteObject,
  Navigate,
} from 'react-router-dom';
import { LoadingPage } from '../../pages';
import routes from '../../configs/routes';
import { AppLayout } from '../layout/app';
import { paths } from '../../constant';

export interface RouterProps {
  defaultRoute: string;
}

export function Routes(props: RouterProps) {
  const { defaultRoute } = props;
  const defaultRouteObject: RouteObject = {
    index: true,
    path: '/',
    element: <Navigate to={defaultRoute} />,
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
