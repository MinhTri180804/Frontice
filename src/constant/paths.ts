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
  challenges: '/challenges',
  solutionDetails: '/solutionDetails',
  setting: '/setting',
  statistic: '/statistic',
  recruiterCompany: '/recruiter-company',
  submitSolution: '/submit-solution',
  challengeDetails: '/challenge-details',

  API: {
    root: 'api/v1',
    AUTH: {
      root: '/auth',
      login: `/login`,
      register: '/signup',
      logout: '/logout',
      forgot_password: '/forgot-password',
      reset_password: '/reset-password',
      send_otp: '/otp-sending',
      verify_email: '/email-verification',
      verify_forgot_password_otp: '/verify-forgot-password-otp',
      refreshToken: '/refresh-token',
    },
  },

  LOCAL_STORAGE: {
    emailRegister: 'emailRegister',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    account: 'accountInformation',
    emailForgotPassword: 'emailForgotPassword',
    i18nLanguage: 'i18nextLng',
  },

  LANGUAGE: {
    english: 'en',
    vietnamese: 'vi',
  },
};

export default paths;
