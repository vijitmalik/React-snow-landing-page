import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="left-icons">
                <span><img className="now-icon" alt="servicenow" src="https://www.pngitem.com/pimgs/m/276-2764772_servicenow-logo-png-transparent-icon-servicenow-logo-png.png"/></span>
                <span>Favourites</span>
                <span>History</span>
                <span>Workspace</span>
            </div>
            <div className="middle-section">
                <div className="header-title">CSM Agent Workspace</div>
            </div>
            <div className="right-icons">
            <input type="text" placeholder="Search..." />
                <span><img className = "user-image" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/servicenow_logo_icon_168835.png" alt="User"/></span>
            </div>
        </div>
    );
}

export default Header;
