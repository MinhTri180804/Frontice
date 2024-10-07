import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import './Solution.scss';
interface Solution {
  image: string;
  time: string;
  name: string;
  tech: string[];
}

const Solution: React.FC<Solution> = ({ ...props }) => {
  const { image, time, name, tech } = props;
  return (
    <>
      <div className="container-solution">
        <div className="solution">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="desc-solution-item">
            <div className="time-solution">{time}</div>
            <div className="name-solution">{name}</div>
            <div className="tech-solution">
              {tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="point-panel">
              <div className="score-solution">123 score</div>
              <div className="rank-level">Diamon</div>
            </div>
            <div className="interaction-panel">
              <div className="action-like">
                <HandThumbUpIcon />
                <p>12k</p>
              </div>
              <div className="action-dislike">
                <HandThumbDownIcon />
                <p>12k</p>
              </div>
              <div className="action-comment">
                <ChatBubbleLeftEllipsisIcon />
                <p>12k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Solution;
