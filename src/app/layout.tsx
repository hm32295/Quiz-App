'use client'

import { ToastContainer } from 'react-toastify';
import './globals.css'
import Navbar from './_component/navbar/navbar';
import Sidebar from './_component/sidebar/Sidebar';
import { useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [open, setOpen] = useState(false)

  return (
    <html lang="en">
      <body className="flex min-h-screen">
        {/* Sidebar (always visible on md+, controlled by open on mobile) */}
        <Sidebar open={open} setOpen={setOpen} />

        {/* Main Content */}
        <div className="flex-1">
          <Navbar open={open} setOpen={setOpen} />
          <main className="p-4">{children}</main>
        </div>

        <ToastContainer />
      </body>
    </html>
  );
}
