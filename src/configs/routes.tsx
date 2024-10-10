import React from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import { AppLayout } from '../components/layout/app';
import { AuthLayout } from '../components/layout/auth';
import { paths } from '../constant';
import { HomePage, NotFoundPage } from '../pages';
import OtpPage from '../pages/Auth/OTP/OtpPage';
import {
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
} from '../pages/Auth';

const ProfilePage = React.lazy(() => import('../pages/Profile'));
const SolutionDetailsPage = React.lazy(
  () => import('../pages/SolutionDetails'),
);
const StatisticPage = React.lazy(() => import('../pages/Statistic'));

const extendedRoutes: RouteObject[] = [
  {
    index: true,
    path: paths.home,
    element: <HomePage />,
  },
  {
    path: paths.profile,
    element: <ProfilePage />,
  },
  {
    path: paths.solutionDetails,
    element: <SolutionDetailsPage />,
  },
  {
    path: paths.statistic,
    element: <StatisticPage />,
  },
];

const extendedRoutesAuth: RouteObject[] = [
  {
    index: true,
    path: paths.login,
    element: <LoginPage />,
  },
  {
    path: paths.register,
    element: <RegisterPage />,
  },
  {
    path: paths.otp,
    element: <OtpPage />,
  },
  {
    path: paths.forgotPassword,
    element: <ForgotPasswordPage />,
  },
  {
    path: paths.resetPassword,
    element: <ResetPasswordPage />,
  },
];

const routes: RouteObject[] = [
  {
    path: paths.default,
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      ...extendedRoutes,
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: paths.auth,
    element: <AuthLayout />,
    children: [
      ...extendedRoutesAuth,
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
