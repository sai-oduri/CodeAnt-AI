import { useState } from "react";
import Logo from "../../assets/logo.png";
import {
  ChevronDownIcon,
  HomeIcon,
  CodeBracketIcon,
  CloudIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  PhoneIcon,
  ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/outline";
import SidebarItem from "../../shared/SidebarItem";

const Sidebar = () => {

  const [sidebarItem, setSidebarItem] = useState("repositories");

  return (
    <div className="bg-white w-[242px] flex flex-col items-center justify-between py-4 px-2">
      {/* TOP */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-start justify-between gap-4">
          <img src={Logo} alt="logo" width={160} className="hover:cursor-pointer" />
          <button className="bg-white flex items-center gap-2 text-[#181D27] border-[1px] rounded-md p-2">
            <span className="text-sm">UtkarshDhairyaPa...</span><ChevronDownIcon className="size-5" />
          </button>
        </div>
        <div>
          <SidebarItem sidebarItem={sidebarItem} setSidebarItem={setSidebarItem} icon={<HomeIcon className="size-5" />} text="Repositories" />
          <SidebarItem sidebarItem={sidebarItem} setSidebarItem={setSidebarItem} icon={<CodeBracketIcon className="size-5" />} text="AI Code Review" />
          <SidebarItem sidebarItem={sidebarItem} setSidebarItem={setSidebarItem} icon={<CloudIcon className="size-5" />} text="Cloud Security" />
          <SidebarItem sidebarItem={sidebarItem} setSidebarItem={setSidebarItem} icon={<DocumentTextIcon className="size-5" />} text="How to Use" />
          <SidebarItem sidebarItem={sidebarItem} setSidebarItem={setSidebarItem} icon={<Cog6ToothIcon className="size-5" />} text="Settings" />
        </div>
      </div>

      {/* BOTTOM */}
      <div>
        <SidebarItem sidebarItem={sidebarItem} setSidebarItem={setSidebarItem} icon={<PhoneIcon className="size-5" />} text="Support" />
        <SidebarItem sidebarItem={sidebarItem} setSidebarItem={setSidebarItem} icon={<ArrowRightStartOnRectangleIcon className="size-5" />} text="Logout" />
      </div>
    </div>
  )
}

export default Sidebar