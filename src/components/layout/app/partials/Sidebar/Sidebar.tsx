import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import { BrandColorLogo } from "../../../../../assets/logos/locals"
import { menuItem } from '../../../../../configs';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-logo">
                <img src={BrandColorLogo} alt="logo" />
            </div>

            <ul className="sidebar-menu">
                {menuItem.map((item) => (
                    <li key={item.path} className="sidebar-section">
                        {item.children ? (
                            <>
                                <span className="sidebar-title">{item.label}</span>
                                {item.children.map((child) => (
                                    <NavLink
                                        key={child.path}
                                        to={child.path}
                                        className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
                                    >
                                        {child.icon && <child.icon width={24} height={24} />}
                                        <span>{child.label}</span>
                                    </NavLink>
                                ))}
                            </>
                        ) : (
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
                            >
                                {item.icon && <item.icon width={24} height={24} />}
                                <span>{item.label}</span>
                            </NavLink>
                        )}
                    </li>
                ))}
            </ul>

            <div className="sidebar-footer">
                <div className="sidebar-image-placeholder"></div>
            </div>
        </div>
    );
};

export default Sidebar;
