import { Input } from '../../components/common';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <div
        style={{
          width: '120px',
        }}
      >
        <Input type="text" />
      </div>
    </div>
  );
};

export default Home;
