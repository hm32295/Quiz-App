
import {
  FaEnvelope,
  FaBell,
  FaPlus,
} from "react-icons/fa";
import UserDropdown from "./userDropdown";
import { FiMenu } from "react-icons/fi";

export default function Navbar({ open,setOpen }:{open:boolean ,setOpen: any}) {
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-6 py-2 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3 md:gap-4">
        {!open? 
         <button className="cursor-pointer md:hidden" onClick={toggleSidebar}>
            <FiMenu size={24} />
          </button>

        :null}  
        <span className="text-sm md:text-base font-medium">Groups</span>
      </div>

      {/* Center button */}
      <button className="flex items-center gap-2 border border-gray-300 px-3 md:px-4 py-1.5 rounded-full hover:bg-gray-100 transition text-xs md:text-sm font-medium">
        <FaPlus className="w-4 h-4" />
        <span className="hidden sm:inline">New quiz</span>
      </button>

      {/* Right section */}
      <div className="flex items-center gap-3 md:gap-6">
        <div className="relative">
          <FaEnvelope className="w-5 h-5" />
          <span className="absolute -top-1.5 -right-2 bg-rose-100 text-black text-[10px] px-1.5 rounded-full font-semibold">
            10
          </span>
        </div>
        <div className="relative">
          <FaBell className="w-5 h-5" />
          <span className="absolute -top-1.5 -right-2 bg-rose-100 text-black text-[10px] px-1.5 rounded-full font-semibold">
            10
          </span>
        </div>
        <div className="flex items-center gap-1">
          <UserDropdown />
        </div>
      </div>
    </nav>
  );
}
