import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PrivateRoute } from '../../wrapper';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <PrivateRoute>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </PrivateRoute>
  );
};

export default AppLayout;
