import './challenge.scss';
import { FC } from 'react';
import Button from '../Button';
// import TagChallenge from '../TagChallenge';
import ChallengeTechnical from '../ChallengeTechnical';
import ChallengeLevelDifficulty from '../ChallengeLevelDifficulty';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../constant';
import { IDataChallengeResponse } from '../../../types/response/listChallenge';

interface IChallengeProps {
  challengeData: IDataChallengeResponse;
}

const Challenge: FC<IChallengeProps> = ({ challengeData }) => {
  const navigate = useNavigate();
  const handleClickViewDetails = () => {
    navigate(`${paths.challengeDetails}/${challengeData.id}`);
    // navigate(paths.challengeDetails);
  };

  // https://drive.google.com/uc?export=view&id=1iKxEIHvVqQp3AogemONFo8Tn_fG0Ckrw
  return (
    <div className="challenge__component-container">
      <div className="banner">
        <img src={challengeData?.previews[0]?.url} alt="" />
        <div className="tag__challenge-list">
          {/* {tags.map((tag, index) => (
            <TagChallenge key={`${tag.value}-${index}`} type={tag.value} />
          ))} */}
        </div>
      </div>

      <div className="content">
        <div className="heading">
          <div className="heading-name">{challengeData?.title}</div>
          <div className="heading-technical">
            {challengeData?.technicals.map((technical, index) => (
              <ChallengeTechnical
                technicalValue={technical.title}
                key={`${technical}-${index}`}
              />
            ))}
          </div>
        </div>

        <div className="overview">
          <div className="score">
            <span className="value">
              {challengeData?.challengePoint?.points}
            </span>
            <span className="label">Score</span>
          </div>
          <ChallengeLevelDifficulty
            level={challengeData?.challengePoint?.level}
            difficulty={challengeData?.challengePoint.difficulty}
          />
        </div>

        <div className="description">
          <span>{challengeData?.description}</span>
        </div>
      </div>

      <Button
        onClick={handleClickViewDetails}
        label="View Details"
        buttonSize="small"
        styleType="secondary"
      />
    </div>
  );
};

export default Challenge;
