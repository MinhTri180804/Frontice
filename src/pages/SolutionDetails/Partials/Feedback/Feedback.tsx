import { Input } from '../../../../components/common';
import Comment from '../Comments';
import ReplyComment from '../ReplyComment';
import './Feedback.scss';
const Feedback: React.FC = () => {
  return (
    <>
      <div className="container-feedback">
        <div className="header">
          <h1>Feedback </h1>
          <div className="action">
            <div className="mentor">Mentor</div>
            <div className="other">Other</div>
          </div>
        </div>
        <div className="list-feedback">
          <div className="input-feedback">
            <div>Comment</div>
            <textarea name="Feedback" id=""></textarea>
          </div>
          <Comment />
          <ReplyComment />

          <ReplyComment />
          <Comment />
        </div>
      </div>
    </>
  );
};
export default Feedback;
