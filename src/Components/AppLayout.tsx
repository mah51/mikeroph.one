import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import UpDown from '@/Components/Animations';
import SVG from '@/Components/SVG';
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
      <UpDown type="normal">
        <SVG icon="triangle" width={48} stroke left="10%" top="20%" />
        <SVG icon="hexa" width={48} stroke left="60%" top="70%" />

        <SVG icon="box" width={6} left="60%" top="15%" />
      </UpDown>
      <UpDown type="wide">
        <SVG icon="triangle" width={24} stroke left="65%" top="8%" />

        <SVG icon="triangle" width={12} stroke left="90%" top="50%" />

        <SVG icon="triangle" width={16} stroke left="30%" top="65%" />

        <SVG icon="circle" width={6} left="75%" top="10%" />
      </UpDown>
      <UpDown type="slow">
        <SVG icon="circle" hiddenMobile width={24} left="5%" top="70%" />
        <SVG icon="circle" width={6} left="4%" top="20%" />
        <SVG icon="circle" width={12} left="50%" top="60%" color="gray.100" />
      </UpDown>
      <Nav />
      <Box
        bg={useColorModeValue(
          `rgba(255, 255, 255, 0.8)`,
          `rgba(26, 33, 42, 0.8)`,
        )}
        sx={{ backdropFilter: `saturate(180%) blur(5px)` }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default AppLayout;
