import React from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import { AppLayout } from '../components/layout/app';
import { AuthLayout } from '../components/layout/auth';
import { paths } from '../constant';
import {
  ChallengeDetailsPage,
  HomePage,
  NotFoundPage,
  SubmitSolutionPage,
} from '../pages';
import {
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
} from '../pages/Auth';
import OtpPage from '../pages/Auth/OTP/OtpPage';

const ProfilePage = React.lazy(() => import('../pages/Profile'));
const SolutionDetailsPage = React.lazy(
  () => import('../pages/SolutionDetails'),
);
const Challeges = React.lazy(() => import('../pages/Challenges'));
const Solutions = React.lazy(() => import('../pages/Solutions'));
const StatisticPage = React.lazy(() => import('../pages/Statistic'));
const RecruiterCompanyPage = React.lazy(
  () => import('../pages/RecruiterCompany'),
);

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
    path: paths.challenges,
    element: <Challeges />,
  },
  {
    path: paths.solutions,
    element: <Solutions />,
  },
  {
    path: paths.statistic,
    element: <StatisticPage />,
  },
  {
    path: paths.recruiterCompany,
    element: <RecruiterCompanyPage />,
  },

  {
    path: paths.submitSolution,
    element: <SubmitSolutionPage />,
  },

  { path: paths.challengeDetails, element: <ChallengeDetailsPage /> },
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
