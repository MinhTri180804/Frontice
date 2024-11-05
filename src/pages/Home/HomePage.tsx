import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Challenge, Section } from '../../components/common';
import { ChallengeSkeleton } from '../../components/skeleton';
import ConditionWrapper from '../../components/wrapper/ConditionWrapper';
import { paths } from '../../constant';
import getChallengeService from '../../services/challengeApi';
import './homePage.scss';
import { HeroChallenge, HeroPremium, HeroSolution } from './Partials';
import { useAuthStore } from '../../store/authStore';
import EmptyComponent from '../../components/common/Empty/Empty';
import { emptyAuthentication } from '../../assets/images';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthentication } = useAuthStore();
  const location = useLocation();
  const currentPathname = location.pathname;
  const { t } = useTranslation();
  const handleButtonViewMoreChallenge = () => {
    navigate(paths.challenges);
  };

  const handleButtonViewMoreChallengeRecruiter = () => {
    navigate(paths.challengesRecruiter);
  };

  const { isPending, data: responseChallenges } = useQuery({
    queryKey: ['challenge'],
    queryFn: async () => {
      const response = await getChallengeService(1, 8);
      const responseData = response.data.data;
      return responseData;
    },
  });
  return (
    <div className="home__page-container">
      <h1 className="title__page">Home Page</h1>

      <div className="content">
        <div className="heros">
          <div className="hero__premium">
            <HeroPremium />
          </div>
          <div className="hero__challenge">
            <HeroChallenge />
          </div>
          <div className="hero__solution">
            <HeroSolution />
          </div>
        </div>

        <Section
          className="challenge__system"
          title="Challenge System"
          iconPosition="left"
          Icon={() => <AcademicCapIcon width={32} height={32} />}
        >
          <div className="list__challenges">
            <ConditionWrapper
              condition={!isPending}
              fallback={() => {
                return Array.from({ length: 8 }).map((_, index) => (
                  <ChallengeSkeleton key={`${index}`} />
                ));
              }}
            >
              {responseChallenges?.result.map((challenge, index) => (
                <Challenge challengeData={challenge} key={`${index}`} />
              ))}
            </ConditionWrapper>
          </div>
          <Button
            styleType="secondary"
            buttonSize="normal"
            label="View More"
            className="button__view-more"
            onClick={handleButtonViewMoreChallenge}
          />
        </Section>

        <Section
          className="challenge__recruiter"
          title="Challenge Recruiter"
          iconPosition="left"
          Icon={() => <AcademicCapIcon width={32} height={32} />}
        >
          <ConditionWrapper
            condition={isAuthentication}
            fallback={() => {
              return (
                <EmptyComponent
                  pathImg={emptyAuthentication}
                  text={t('Authentication.Login')}
                >
                  <Button
                    onClick={() =>
                      navigate(`${paths.auth}/${paths.login}`, {
                        state: {
                          previousPage: currentPathname,
                        },
                      })
                    }
                    label={t('Button.LoginNow')}
                    buttonSize="medium"
                    styleType="secondary"
                  />
                </EmptyComponent>
              );
            }}
          >
            <div className="list__challenges">
              <ConditionWrapper
                condition={!isPending}
                fallback={() => {
                  return Array.from({ length: 8 }).map((_, index) => (
                    <ChallengeSkeleton key={`${index}`} />
                  ));
                }}
              >
                {responseChallenges?.result.map((challenge, index) => (
                  <Challenge challengeData={challenge} key={`${index}`} />
                ))}
              </ConditionWrapper>
            </div>
            <Button
              styleType="secondary"
              buttonSize="normal"
              label="View More"
              className="button__view-more"
              onClick={handleButtonViewMoreChallengeRecruiter}
            />
          </ConditionWrapper>
        </Section>
      </div>
    </div>
  );
};

export default Home;
