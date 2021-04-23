import React, { useEffect } from 'react';
import Nav from './NavBar/Nav';
import Footer from './Footer/Footer';

interface AppLayoutProps {
  children: React.ReactNode;
}

declare global {
  interface Window {
    GA_INITIALISED: boolean;
  }
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
