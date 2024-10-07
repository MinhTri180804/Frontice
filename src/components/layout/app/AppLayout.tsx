import React, { useState } from 'react';
import "./AppLayout.scss"
import { Header, Sidebar } from './partials';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsCollapsed(prevState => !prevState);
  };

  return (
    <div className="layout-container">
      <aside className={isCollapsed ? 'collapsed' : ''}>
        {!isCollapsed && <Sidebar />}
        <button onClick={toggleSidebar} className="toggle-button">
          {isCollapsed ? '>' : '<'}
        </button>
      </aside>

      <div className='site-layout'>
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
