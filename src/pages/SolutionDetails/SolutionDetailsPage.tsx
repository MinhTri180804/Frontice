import { ChallengeOverview } from '../../components/common';
import Action from './Partials/Action/Action';
import SolutitonDetails from './Partials/Details';
import Feedback from './Partials/Feedback/Feedback';
import './SolutionDetailsPage.scss';
const SolutionDetails: React.FC = () => {
  return (
    <>
      <div className="container-solution-details-page">
        <div className="title">
          <h1>Solution Details</h1>
          {/* <ChallengeOverview/> */}
          <Action />
          <SolutitonDetails />
          <Feedback />
        </div>
      </div>
    </>
  );
};
export default SolutionDetails;
