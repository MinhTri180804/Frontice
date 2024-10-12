import './challenge.scss';
import { FC } from 'react';
import Button from '../Button';

interface IChallengeProps {
  bannerUrl: string;
  name: string;
  technicalList: string[];
  score: string | number;
  level: string;
  difficulty: string;
  description: string;
}

const Challenge: FC<IChallengeProps> = ({
  bannerUrl,
  name,
  technicalList,
  score,
  level,
  difficulty,
  description,
}) => {
  return (
    <div className="challenge__component-container">
      <div className="banner">
        <img src={bannerUrl} alt="" />
      </div>

      <div className="content">
        <div className="heading">
          <div className="heading-name">{name}</div>
          <div className="heading-technical">
            {technicalList.map((technical, index) => (
              <div className="value" key={`${technical}-${index}`}>
                {technical}
              </div>
            ))}
          </div>
        </div>

        <div className="overview">
          <div className="score">
            <span className="value">{score}</span>
            Score
          </div>
          <div className="level-difficulty">
            <div className="difficulty">{difficulty}</div>
            <div className="level">{level}</div>
          </div>
        </div>

        <div className="description">
          <span>{description}</span>
        </div>
      </div>

      <Button label="View Details" buttonSize="small" styleType="secondary" />
    </div>
  );
};

export default Challenge;
