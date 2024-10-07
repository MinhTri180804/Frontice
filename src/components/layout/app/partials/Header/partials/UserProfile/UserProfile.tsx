import "./UserProfile.scss"
import { NotificationIcon, UpIcon, DownIcon } from "../../../../../../../assets/icons";

const UserProfile: React.FC = () => {
    return (
        <div className="user-profile-container">
            <div className="notification-icon">
                <NotificationIcon width={24} height={24} />
            </div>
            <div className="user-profile">
                <div className="user-avatar">
                    {/* render avatar here */}
                </div>
                <div className="user-info">
                    <div className="user-name">
                        username
                    </div>
                    <div className="user-id">
                        #id
                    </div>
                </div>
                <div
                    className="drop-down"
                >
                    <UpIcon width={16} height={16} />
                    <DownIcon width={16} height={16} />
                </div>
            </div>
        </div>
    );
};

export default UserProfile;