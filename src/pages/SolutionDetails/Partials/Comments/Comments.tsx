import './Comments.scss';
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
type BaseComment = {
  nameAuthor?: string;
  avatarAuthor?: string;
  date?: string;
  content?: string;
  like?: string;
  dislike?: string;
  comment?: string;
};

interface IComment extends BaseComment {
  childrenComment?: BaseComment[];
}

interface ICommentProps extends IComment {
  reply?: {
    parentComment: string;
  };
}

const Comment: React.FC<IComment> = ({ ...props }) => {
  const {
    nameAuthor = '',
    nameCustomer = 'Incognito',
    avatarAuthor = '',
    avatarCustomer = '',
    date,
    content,
    like,
    dislike,
    comment,
    isReply = false,
  } = props;

  return (
    <>
      {isReply && (
        <div className="container-comment">
          <div className="info-author reply">
            <div className="avatar-author">
              <img src={avatarCustomer} alt="Author avatar" />
            </div>
            <div className="name-author">{nameCustomer}</div>
            <div className="date-comment">Date: {date}</div>
            <div className="reply-to">
              Reply to: <p>{nameAuthor}</p>{' '}
            </div>
          </div>
          <div className="content-comment">
            <p>{content}</p>
            <div className="interaction-panel">
              <div className="action-like">
                <HandThumbUpIcon />
                <p>{like}</p>
              </div>
              <div className="action-dislike">
                <HandThumbDownIcon />
                <p>{dislike}</p>
              </div>
              <div className="action-comment">
                <ChatBubbleLeftEllipsisIcon />
                <p>{comment}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Comment;
