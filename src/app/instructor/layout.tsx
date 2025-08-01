'use client'
import { ReactNode, useState } from 'react';
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
interface menuItems{
  
    name:string
    icon:ReactNode;
    active?:boolean
 
}
const menuItems = [
  { name: 'Dashboard', icon: <FaHome /> ,path:'/instructor/dashboard'},
  { name: 'Students', icon: <FaUsers />, path:'/instructor/students' },
  { name: 'Groups', icon: <MdGroups />, path:'/instructor/groups'},
  { name: 'Quizzes', icon: <FaChalkboardTeacher />, path:'/instructor/quizzes' },
  { name: 'Results', icon: <FaChartBar />, path:'/instructor/results' },
  { name: 'Help', icon: <FaQuestionCircle /> , path:'/instructor/help'},
]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  const [open, setOpen] = useState(false);
  const [menu , setMenu] = useState(menuItems)

  return (
    <html>
      <body>
        
        <Navbar open={open} setOpen={setOpen} menuItems={menu}/>
        <div className="flex gap-2">
       
     
          <Sidebar setMenu={setMenu} open={open} setOpen={setOpen} menuItems={menu} />
        
           <main className="p-4 w-full">{children}</main>
        </div>


      </body>
    </html>
  );
}
