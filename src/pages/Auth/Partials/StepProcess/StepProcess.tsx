import './stepProcess.scss';
import { FC } from 'react';

interface IStepProcessProps {
  mock: string;
}

const StepProcess: FC<IStepProcessProps> = ({ mock }) => {
  console.log(mock);
  return (
    <div>
      <div>This is step process</div>
    </div>
  );
};

export default StepProcess;
