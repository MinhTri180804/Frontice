import "./UserProfile.scss"
import { NotificationIcon, UpAndDownIcon } from "../../../../../../../assets/icons";
import { DefaultAvatar } from "../../../../../../../assets/images";

const UserProfile: React.FC = () => {
    return (
        <div className="user-profile-container">
            <div className="notification-icon">
                <NotificationIcon width={24} height={24} />
            </div>
            <div className="user-profile">
                <div className="user-avatar">
                    <img src={DefaultAvatar} alt="avatar" />
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
                    <UpAndDownIcon width={24} height={24} stroke="black" />
                </div>
            </div>
        </div>
    );
};

export default UserProfile;