type PathType = {
  [key: string]: string;
};

const instance: PathType = {
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
  profile: '/profile',
};

export default instance;
