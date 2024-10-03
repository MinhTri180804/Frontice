import Button from '../../components/common/Button/Button';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <Button
        type="secondary"
        size="large"
        label="button-large"
        iconPosition="left"
        Icon={() => <ArrowLongRightIcon />}
      />
      <Button
        type="primary"
        size="normal"
        label="button-normal"
        iconPosition="right"
        Icon={() => <ArrowLongRightIcon />}
      />
      <Button
        type="tertiary"
        size="medium"
        label="button-medium"
        iconPosition="left"
        Icon={() => <ArrowLongRightIcon />}
      />
      <Button
        type="tertiary"
        size="small"
        label="button-small"
        iconPosition="left"
        Icon={() => <ArrowLongRightIcon />}
      />
      <Button
        type="primary"
        size="extra-small"
        label="button-extra-small"
        iconPosition="left"
        Icon={() => <ArrowLongRightIcon />}
      />
    </div>
  );
};

export default Home;
