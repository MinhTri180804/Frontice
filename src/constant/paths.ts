const paths = {
  // default path
  default: '/',
  home: '/home',

  // auth path
  auth: '/auth',
  login: 'login',
  register: 'register',
  forgotPassword: 'forgot-password',
  otp: 'otp',
  resetPassword: 'reset-password',

  // protected path
  challengesSystem: '/challenges-system',
  challengesRecruiter: '/challenges-recruiter',
  solutions: '/solutions',
  mySolutions: '/my-solutions',
  profile: '/profile',
  solutionDetails: '/solutionDetails',
  setting: '/setting',

  API: {
    root: 'api/v1',
    AUTH: {
      root: '/auth',
      login: `/login`,
      register: '/signup',
      logout: '/logout',
      forgot_password: '/forgot-password',
      reset_password: '/reset-password',
      send_otp: '/send-otp',
      verify_email: '/verify-email',
      verify_forgot_password_otp: '/verify-forgot-password-otp',
    },
  },
  LOCAL_STORAGE: {
    emailRegister: 'emailRegister',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    account: 'accountInformation',
    emailForgotPassword: 'emailForgotPassword',
  },
  statistic: '/statistic',
};

export default paths;
