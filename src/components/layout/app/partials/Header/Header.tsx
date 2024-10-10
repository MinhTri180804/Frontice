import "./Header.scss"
import {
    SearchBar,
    UserProfile,
    LanguageSwitcher,
} from "./partials"

const Header: React.FC = () => {
    return (
        <div className="header-container">
            <SearchBar />
            <LanguageSwitcher />
            <UserProfile />
        </div>
    );
};

export default Header;