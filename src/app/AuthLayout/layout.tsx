import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{overflow: 'hidden'}}>
     
    
         {children}
    </div>
  );
};

export default Layout;
