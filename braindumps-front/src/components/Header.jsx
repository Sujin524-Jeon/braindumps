import "./Header.css";
import Profile from "./Profile";

const Header = () => {

    return (
        <>  
            <div className="Header">
                <div className="logo_section">
                    <img src="../logo.svg"/>    
                </div>
                <div className="profileImg_section">
                    <Profile />
                </div>
            </div>
        </>
    );
};

export default Header;