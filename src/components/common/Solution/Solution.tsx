import {
  ChatBubbleLeftEllipsisIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';
import { DefaultAvatar } from '../../../assets/images';
import SolutionLevelDifficulty from '../SolutionLevelDifficulty';
import DescSolution from './Partials/Solutions';
import DescUser from './Partials/User';
import './Solution.scss';
interface Solution {
  image: string;
  time: string;
  name: string;
  tech: string[];
  userAvatar?: string;
  titleSolution?: string;
  descriptionSolution?: string;
  isShowDesc?: boolean;
}

const Solution: React.FC<Solution> = ({ ...props }) => {
  const {
    image,
    time,
    name,
    tech,
    titleSolution = 'Title of the solution',
    descriptionSolution = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias cum optio aspernatur! Omnis inventore ipsum impedit corporis dolorum, debitis pariatur reprehenderit, praesentium unde placeat deleniti distinctio. Obcaecati, recusandae vitae.',
    isShowDesc = false,
  } = props;
  return (
    <>
      <div className="container-solution">
        <div className="solution">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="desc-solution-item">
            <div className="time">
              <div className="time-solution">{time}</div>
              <div className="name-solution">{name}</div>
            </div>
            <div className="tech-solution">
              {tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="point-panel">
              <div className="score-solution">123 score</div>
              <div className="rank-level">
                <SolutionLevelDifficulty level="Diamond" difficulty="High" />
              </div>
            </div>
            {isShowDesc && (
              <DescUser
                userAvatar={DefaultAvatar}
                userId="#123"
                userName="user name"
                userRank="Gold"
              />
            )}

            {isShowDesc && (
              <DescSolution
                titleSolutioon={titleSolution}
                descriptionSolution={descriptionSolution}
              />
            )}
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
