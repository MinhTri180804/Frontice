import './informationAuthor.scss';
import { FC } from 'react';
import Button from '../Button';
import { IProfileEntity } from '../../../types/entity';
import { DefaultAvatar } from '../../../assets/images';

interface IInformationAuthorProps {
  authorProfile: IProfileEntity;
}
const InformationAuthor: FC<IInformationAuthorProps> = ({ authorProfile }) => {
  return (
    <div className="information__author-component">
      <div className="author">
        <div className="image-solution">
          <img
            src={authorProfile?.accountResponse?.avatar || DefaultAvatar}
            alt=""
          />
        </div>
        <div className="name-rank-author">
          <div className="name">
            {authorProfile.firstName} {authorProfile.lastName}
          </div>
          <div className="rank">{authorProfile.level}</div>
        </div>
      </div>
      <div className="challenge-summary">
        <div className="join-challenge">
          <div className="title">Tham Gia</div>
          <div className="total">{authorProfile.totalJoinedChallenge || 0}</div>
          <p>Challenges</p>
        </div>
        <div className="submit-challenge">
          <div className="title">Hoàn thành</div>
          <div className="total">
            {authorProfile.totalSubmittedChallenge || 0}
          </div>
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
  );
};

export default InformationAuthor;
