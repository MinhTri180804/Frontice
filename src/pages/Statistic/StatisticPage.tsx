import React from 'react';
import './StatisticPage.scss';
import { SectionStatistic } from './partitals';
import { AcademicCapIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import ChallengeIncomplete from './partitals/ChallengeIncomplete/ChallengeIncomplete';
import Solution from '../../components/common/Solution';

const StatisticPage: React.FC = () => {
  return (
    <div className="statistic__page-container">
      <h1 className="title-page">Statistic Page</h1>
      <div className="content">
        <div className="section-with-account">
          <SectionStatistic
            options
            className="incomplete__challenge"
            Icon={() => <AcademicCapIcon width={32} height={32} />}
            title="Incomplete Challenges"
          >
            <div className="line"></div>
            <div className="challenge__list">
              {Array.from({
                length: 6,
              }).map(() => (
                <ChallengeIncomplete
                  className="challenge__incomplete"
                  name="Link-sharing app"
                  technicalList={['html', 'css']}
                  difficulty="High"
                  level="Diamon"
                  score={125}
                  imageURL="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/thypgk1nmxm4modj1wdl.jpg"
                />
              ))}
            </div>
          </SectionStatistic>
          <div className="account"></div>
        </div>
        <SectionStatistic
          title="My Solution"
          Icon={() => <CommandLineIcon width={24} height={24} />}
          className="my__solution"
        >
          <div className="line"></div>
          <div className="solution__list">
            {Array.from({
              length: 8,
            }).map(() => (
              <Solution
                image="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/dmfvghaamqjt9lrx43ql.jpg"
                time="About 5 hours ago"
                name="Contact form"
                tech={['Html', 'css', 'javascript']}
              />
            ))}
          </div>
        </SectionStatistic>
      </div>
    </div>
  );
};

export default StatisticPage;
