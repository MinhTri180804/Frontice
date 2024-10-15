import Comment from '../Comments';
import './Feedback.scss';

const Feedback: React.FC = () => {
  const dataReply = {
    avatarCustomer: 'https://www.w3schools.com/html/img_girl.jpg',
    nameAuthor: 'NgotahnHy',
    nameCustomer: 'NGuyenminh tri', 
    like: '12',
    dislike: '12',
    comment: '12',
    date: '15-10-2024',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet massa. Nulla facilisi. Sed vel ipsum vitae enim ultricies fermentum.',
    isReply: true,
  };
  const dataComment = {
    avatarAuthor:
      'https://i.pinimg.com/564x/41/5e/1d/415e1df3bd4f7432a4b71264375aaa52.jpg',
    nameAuthor: 'NgotahnHy',
    like: '12',
    dislike: '12',
    comment: '12',
    date: '15-10-2024',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet massa. Nulla facilisi. Sed vel ipsum vitae enim ultricies fermentum.',
    isReply: false,
  };
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
          <Comment data={dataComment} />
          <Comment data={dataReply} />
        </div>
      </div>
    </>
  );
};
export default Feedback;
