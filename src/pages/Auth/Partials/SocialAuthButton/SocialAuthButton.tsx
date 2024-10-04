import { FC } from 'react';

interface ISocialAuthButtonProps {
  mock: string;
}

const SocialAuthButton: FC<ISocialAuthButtonProps> = ({ mock }) => {
  console.log(mock);
  return (
    <div>
      <div>This is button social auth button</div>
    </div>
  );
};

export { SocialAuthButton };
