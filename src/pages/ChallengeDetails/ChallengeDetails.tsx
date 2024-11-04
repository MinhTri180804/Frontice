import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ChallengeOverview, FAQ, Section } from '../../components/common';
import { ChallengeSkeleton } from '../../components/skeleton';
import getChallengeDetailService from '../../services/challengeDetailApi';
import './challengeDetails.scss';
import {
  ChallengeDetailsDownload,
  ChallengeDetailsInformation,
  ChallengeDetailsSolution,
} from './Partials';

const ChallengeDetailsPage: FC = () => {
  const { t } = useTranslation();
  const [tabActive, setTabActive] = useState<number>(1);
  const { id } = useParams();
  console.log('id', id);
  const changeTabActive = (tabId: number) => {
    setTabActive(tabId);
  };
  const {
    isPending,
    data: responseChallengeDetails,
    isError,
  } = useQuery({
    queryKey: ['challengeDetails', id],
    queryFn: async () => {
      const response = await getChallengeDetailService(id ?? '');
      const responseData = response.data.data;
      return responseData;
    },
  });
  if (isPending) {
    return (
      <div>
        <ChallengeSkeleton />
      </div>
    );
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }
  console.log('first 28: ', responseChallengeDetails);
  return (
    <div className="challenge__details-page">
      <div className="title">{t('Challenge details')}</div>
      <div className="content">
        <ChallengeOverview
          name={responseChallengeDetails.title}
          description={responseChallengeDetails.description}
          score={responseChallengeDetails.challengePoint.points}
          peopleParticipated="123"
          peopleSubmit={22}
          technicalList={responseChallengeDetails?.technicals}
          level={responseChallengeDetails?.challengePoint?.level}
          difficulty={responseChallengeDetails.challengePoint.difficulty}
          optionsImagePreview={responseChallengeDetails.previews}
        />

        <section className="tab__content-wrapper">
          <ul className="tab__list">
            <li
              onClick={() => changeTabActive(1)}
              className={`item ${tabActive === 1 && 'active'} `}
            >
              {t('Information')}
            </li>
            <li
              onClick={() => changeTabActive(2)}
              className={`item ${tabActive === 2 && 'active'} `}
            >
              {t('Download assets')}
            </li>
            <li
              onClick={() => changeTabActive(3)}
              className={`item ${tabActive === 3 && 'active'} `}
            >
              {t('Solution')}
            </li>
          </ul>

          <div className="content__of-tab">
            {tabActive === 1 && <ChallengeDetailsInformation />}
            {tabActive === 2 && (
              <ChallengeDetailsDownload
                resource={responseChallengeDetails.resource}
              />
            )}
            {tabActive === 3 && <ChallengeDetailsSolution />}
          </div>
        </section>

        <Section
          title="Challenge FAQS"
          titlePosition="center"
          className="faq__challenge-section"
        >
          <div className="list">
            <FAQ
              title="How do i submit my solution ?"
              description="We recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask questions in our Discord server, and we will help you submit your project."
            />
            <FAQ
              title="How do i submit my solution ?"
              description="We recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask questions in our Discord server, and we will help you submit your project."
            />
            <FAQ
              title="How do i submit my solution ?"
              description="We recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask questions in our Discord server, and we will help you submit your project."
            />
            <FAQ
              title="How do i submit my solution ?"
              description="We recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask questions in our Discord server, and we will help you submit your project."
            />
          </div>
        </Section>
        <section className="faq__challenge"></section>
      </div>
    </div>
  );
};

export default ChallengeDetailsPage;
