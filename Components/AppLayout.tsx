import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

interface AppLayoutProps {
  children: React.ReactNode;
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
