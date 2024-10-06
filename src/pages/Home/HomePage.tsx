import { OtpInput } from '../Auth/Partials/OtpInput';
import { StepProcess } from '../Auth/Partials/StepProcess';
import './homePage.scss';

const Home: React.FC = () => {
  const testing = () => {
    console.log('click');
  };
  return (
    <div className="home-container">
      <h1>Home Page</h1>

      <div className="flex">
        <OtpInput isSuccess />
        <OtpInput isSuccess />
        <OtpInput isSuccess />
      </div>

      <div className="flex-col">
        <StepProcess
          stepNumber={1}
          stepContent="Enter your account email"
          isActive={true}
          eventClick={testing}
        />
        <StepProcess
          stepNumber={2}
          stepContent="Enter your account email"
          isActive={false}
          eventClick={testing}
        />
        <StepProcess
          stepNumber={3}
          stepContent="Enter your account email"
          isActive={false}
          eventClick={testing}
        />
      </div>
    </div>
  );
};

export default Home;
