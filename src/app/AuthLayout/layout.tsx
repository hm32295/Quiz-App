import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
   
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <img src="/Image.svg" alt="YOO" className="w-3/4 h-auto" />
      </div>

     
      <div className="lg:w-1/2 w-full relative flex items-center justify-center p-6 lg:p-12">
      
        <div
          className="absolute inset-0 lg:hidden bg-cover bg-center"
          style={{ backgroundImage: `url('/Image.svg')` }}
        />

       
        <div className="relative z-10 w-full max-w-md mx-auto bg-white/90 lg:bg-transparent p-4 rounded-md shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
