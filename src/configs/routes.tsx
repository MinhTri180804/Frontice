import { RouteObject, Outlet } from 'react-router-dom';
import { NotFoundPage, LoginPage, RegisterPage, HomePage } from '../pages';
import { paths } from '../constant';
import { AppLayout } from '../components/layout/app';
import React from 'react';
import { AuthLayout } from '../components/layout/auth';
import { OtpPage } from '../pages/Auth/OTP';
import { ForgotPasswordPage } from '../pages/Auth/ForgotPassword';
import { ResetPasswordPage } from '../pages/Auth/ResetPassword';

const ProfilePage = React.lazy(() => import('../pages/Profile'));

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
