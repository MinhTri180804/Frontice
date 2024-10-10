import image from '../../../asset/images/solution.png';
import Action from './Action/Action';
import './SolutionDetails.scss';
interface ChallengeDetails {
  technical: string[];
  titleName: string;
  shortDescription: string;
  // image
  image: string;
  sizeScreen: string[];
  id?: string;
}
const SolutionDetails: React.FC<ChallengeDetails> = ({ ...props }) => {
  const { technical, titleName, shortDescription, image, id } = props;
  return (
    <>
      <div className="container-solution-details">
        <div className="detail-left">
          <header>
            <div className="tech-level">
              <div className="technical"></div>
              <div className="level"></div>
            </div>
            <div className="title-challenge"></div>
          </header>
          <main>
            <div className="short-description">
              <Action />
            </div>
            <div className="notion">
              <div className="quantity-join">12</div>
              <div className="quantity-submit">12</div>
              <div className="point">100 diem</div>
            </div>
          </main>
        </div>
        <div className="detail-right">
          <div className="image">
            <img src={image} alt="IMAGE CHALLENGE" />
          </div>
          <div className="screen-size">{/* map */}</div>
        </div>
      </div>
    </>
  );
};

export default SolutionDetails;
