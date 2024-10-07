export interface IResetPasswordRequest {
  resetToken: string;
  newPassword: string;
  confirmPassword: string;
}
