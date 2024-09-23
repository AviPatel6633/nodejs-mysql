'use client';
import React from 'react';
import HeaderMain from './header';
import { usePathname } from 'next/navigation';

const HeaderExport = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === '/' ? (
        children
      ) : (
        <HeaderMain content={children} />
      )}
    </>
  );
};

export default HeaderExport;
