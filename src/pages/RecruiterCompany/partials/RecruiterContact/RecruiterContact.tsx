import './RecruiterContact.scss';

const RecruiterContact: React.FC = () => {

  return (
    <div className="recruiter-contact-container">
      <div className='recruiter-contact-title'>
        <span>Thông tin liên hệ</span>
      </div>
      <div className='recruiter-contact-body'>
        <div className='contact-item'>
          <div className='contact-label'>
            <span>Website</span>
          </div>
          <a href="https://k-tech.net.vn" target="_blank" rel="noopener noreferrer">https://k-tech.net.vn</a>
        </div>
        <div className='contact-item'>
          <div className='contact-label'>
            <span className='contact-label'>LinkedIn</span>
          </div>
          <a href="https://linkedin.com/k-tech-vn" target="_blank" rel="noopener noreferrer">https://linkedin.com/k-tech-vn</a>
        </div>
        <div className='contact-item'>
          <div className='contact-label'>
            <span className='contact-label'>Facebook</span>
          </div>
          <a href="https://facebook.com/k-tech-vn" target="_blank" rel="noopener noreferrer">https://facebook.com/k-tech-vn</a>
        </div>
      </div>
    </div>
  );
};

export default RecruiterContact;
