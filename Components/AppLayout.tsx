import React, { useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { initGA, logPageView } from '../utils/analytics';

interface AppLayoutProps {
  children: React.ReactNode;
}

declare global {
  interface Window {
    GA_INITIALISED: boolean;
  }
}

function AppLayout({ children }: AppLayoutProps) {
  useEffect(() => {
    if (!window.GA_INITIALISED) {
      initGA();
      window.GA_INITIALISED = true;
    }
    logPageView();
  }, []);
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
