import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import { BrandColorLogo } from "../../../../../assets/logos/locals"
import { menuItem } from '../../../../../configs';
import { paths } from '../../../../../constant';
import { Tooltip } from '../../../../common';

interface SidebarProps {
    isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
    const [activeItem, setActiveItem] = useState('');
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    // Handle active color of icon when reload page
    useEffect(() => {
        const storedActiveItem = localStorage.getItem('activeItem');
        if (storedActiveItem) {
            setActiveItem(storedActiveItem);
        } else {
            // Set default activeItem for the first time
            setActiveItem(paths.home);
            localStorage.setItem('activeItem', paths.home);
        }
    }, []);

    const handleItemClick = (path: string) => {
        setActiveItem(path);
        localStorage.setItem('activeItem', path);
    };

    const handleItemHover = (path: string | null) => {
        setHoveredItem(path);
    };

    return (
        <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-logo">
                <img src={BrandColorLogo} alt="logo" />
            </div>

            <div className='sidebar-body'>
                <ul className="sidebar-menu">
                    {menuItem.map((item) => (
                        <li key={item.path} className="sidebar-section">
                            {item.children ? (
                                <>
                                    {!isCollapsed && <span className="sidebar-title">{item.label}</span>}
                                    {item.children.map((child) => (
                                        <NavLink
                                            key={child.path}
                                            to={child.path}
                                            className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
                                            onClick={() => handleItemClick(child.path)}
                                            onMouseEnter={() => handleItemHover(child.path)}
                                            onMouseLeave={() => handleItemHover(null)}
                                        >
                                            {child.icon && <child.icon width={24} height={24} stroke={child.path === activeItem ? "#fff" : "#A4A5A6"} />}
                                            {!isCollapsed && <span>{child.label}</span>}
                                            {isCollapsed && (
                                                <Tooltip
                                                    text={child.label}
                                                    isVisible={hoveredItem === child.path}
                                                />
                                            )}
                                        </NavLink>
                                    ))}
                                </>
                            ) : (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
                                    onClick={() => handleItemClick(item.path)}
                                    onMouseEnter={() => handleItemHover(item.path)}
                                    onMouseLeave={() => handleItemHover(null)}
                                >
                                    {item.icon && <item.icon width={24} height={24} stroke={item.path === activeItem ? "#fff" : "#A4A5A6"} />}
                                    {!isCollapsed && <span>{item.label}</span>}
                                    {isCollapsed && (
                                        <Tooltip
                                            text={item.label}
                                            isVisible={hoveredItem === item.path}
                                        />
                                    )}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                {!isCollapsed &&
                    <div className="sidebar-footer">
                        <div className="sidebar-image-placeholder"></div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Sidebar;
