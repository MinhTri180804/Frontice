import './SolutionDetails.scss';
import pathImg from '../../../../asset/images/solution.png';
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import { Button } from '../../../../components/common';
interface Solution {
  tech?: string[];
  image?: string;
}
const SolutitonDetails: React.FC<Solution> = ({ ...props }) => {
  const { tech = ['html', 'css', 'js'], image = pathImg } = props;
  return (
    <div className="container-solution-details">
      <div className="summary-component">
        <div className="header">
          <p>Submitted about 1 hour ago</p>
          <h1>Result summary component with reactjs and tailwindcss</h1>
          <div className="tech">
            {tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="interaction-buttons">
          <div className="action">
            <div className="action-like">
              <div className="like">
                <HandThumbUpIcon />
                like
              </div>
              <div className="quantity">12k</div>
            </div>
            <div className="action-dislike">
              <div className="dislike">
                <HandThumbDownIcon />
                dislike
              </div>
              <div className="quantity">12k</div>
            </div>
            <div className="action-comment">
              <div className="comment">
                <ChatBubbleLeftEllipsisIcon />
                comment
              </div>
              <div className="quantity">12k</div>
            </div>
          </div>
        </div>

        <section className="questions">
          <h2>
            What are you most proud of, and what would you do differently next
            time?
          </h2>
          <p>
            I'm proud to do this challenge to improve my skills in the frontend
            programming area. I'm proud to do this challenge...
          </p>
        </section>
      </div>
      {/* InformationAuthorComponent */}
      <div className="information-author">
        <div className="author">
          <div className="image-solution">
            <img src={image} alt="" />
          </div>
          <div className="name-rank-author">
            <div className="name">Nguyen Minh Tri</div>
            <div className="rank">Diamond</div>
          </div>
        </div>
        <div className="challenge-summary">
          <div className="join-challenge">
            <div className="title">Tham Gia</div>
            <div className="total">12</div>
            <p>Challenges</p>
          </div>
          <div className="submit-challenge">
            <div className="title">Hoàn thành</div>
            <div className="total">5</div>
            <p>Challenges</p>
          </div>
        </div>
        <div className="progress-bar"></div>
        <div className="action-view-profile">
          <Button
            label="View Profile"
            buttonSize="medium"
            styleType="secondary"
          />
        </div>
      </div>
    </div>
  );
};
export default SolutitonDetails;
