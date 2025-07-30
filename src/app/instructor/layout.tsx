'use client'
import { useState } from 'react';
import {
  FaHome,
  FaUsers,
  FaQuestionCircle,
  FaChartBar,
  FaChalkboardTeacher,
} from 'react-icons/fa'
import { MdGroups } from 'react-icons/md'
import Sidebar from '../_component/sidebar/Sidebar';
import Navbar from '../_component/navbar/navbar';
const menuItems = [
  { name: 'Dashboard', icon: <FaHome /> },
  { name: 'Students', icon: <FaUsers />, active: true  },
  { name: 'Groups', icon: <MdGroups />},
  { name: 'Quizzes', icon: <FaChalkboardTeacher /> },
  { name: 'Results', icon: <FaChartBar /> },
  { name: 'Help', icon: <FaQuestionCircle /> },
]
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
        <Sidebar open={open} setOpen={setOpen} menuItems={menuItems} />

        {/* Main Content */}
        <div className="flex-1">
          <Navbar open={open} setOpen={setOpen} menuItems={menuItems}/>
          <main className="p-4">{children}</main>
        </div>

      </body>
    </html>
  );
}
