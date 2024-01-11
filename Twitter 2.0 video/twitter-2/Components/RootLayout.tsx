import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import '../pages/_app';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return <div className="custom-root-layout">{children}</div>;
};

export default RootLayout;