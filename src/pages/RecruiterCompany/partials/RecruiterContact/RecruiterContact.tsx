import './RecruiterContact.scss';

const RecruiterContact: React.FC = () => {
  return (
    <div className="recruiter-contact-container">
      <div className="recruiter-contact-list">
        <div className="contact-item">
          <div className="contact-label">
            <span>Website</span>
          </div>
          <div className="contact-value">
            <a
              href="https://k-tech.net.vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://k-tech.net.vn
            </a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-label">
            <span className="contact-label">LinkedIn</span>
          </div>
          <div className="contact-value">
            <a
              href="https://linkedin.com/k-tech-vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://linkedin.com/k-tech-vn
            </a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-label">
            <span className="contact-label">Facebook</span>
          </div>
          <div className="contact-value">
            <a
              href="https://facebook.com/k-tech-vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://facebook.com/k-tech-vn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterContact;
