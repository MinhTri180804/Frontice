import { Button, Challenge } from '../../components/common';
import './Challenges.scss';
import { PlusIcon } from '@heroicons/react/24/outline';
const Challenges: React.FC = () => {
  return (
    <>
      <div className="container-challenges-page">
        <div className="header">
          <div className="title">Challenges List</div>
          <Button
            style={{ width: 'fit-content' }}
            label="Filter"
            buttonSize="small"
            iconPosition="left"
            styleType="secondary"
            Icon={() => <PlusIcon />}
          />
        </div>
        <div className="challenges-list">
          {Array.from({ length: 10 }).map(() => (
            <Challenge
              name="Frontend Quiz app"
              bannerUrl="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wcxhsnz3foidwbzshiia.jpg"
              description="This app will test your skills (as well as your knowledge!) as you build out a fully functional quiz. We provide a local JSON file to help you practice working with JSON!"
              level="Diamond"
              difficulty="High"
              technicalList={['html', 'css', 'javascript']}
              score={120}
              tags={[
                {
                  value: 'premium',
                },
                { value: 'new' },
              ]}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Challenges;
