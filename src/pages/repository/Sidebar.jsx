import { useState } from 'react';
import Logo from '../../assets/logo.png';
import {
  ChevronDownIcon,
  HomeIcon,
  CodeBracketIcon,
  CloudIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  PhoneIcon,
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import SidebarItem from '../../shared/SidebarItem';

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [sidebarItem, setSidebarItem] = useState('repositories');

  return (
    <div className="bg-white sticky top-0 z-40 border-b-[1px] lg:border-b-0 w-full lg:w-[242px] lg:flex flex-col items-center justify-between py-4 px-4 lg:px-2">
      {/* TOP */}
      <div className="w-full">
        <div className="lg:block flex items-center justify-between">
          <img
            src={Logo}
            alt="logo"
            width={160}
            className="hover:cursor-pointer"
          />
          <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <XMarkIcon className="lg:hidden size-6" />
            ) : (
              <Bars3Icon className="lg:hidden size-6" />
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden z-50 mt-3 flex flex-col items-start  justify-start gap-1 ">
            <button className="bg-white w-full my-1 flex items-center justify-between gap-2 text-[#181D27] border-[1px] rounded-md p-2">
              <span className="text-sm">UtkarshDhairyaPa...</span>
              <ChevronDownIcon className="size-5" />
            </button>
            <SidebarItem
              sidebarItem={sidebarItem}
              setSidebarItem={setSidebarItem}
              icon={<HomeIcon className="size-5" />}
              text="Repositories"
            />
            <SidebarItem
              sidebarItem={sidebarItem}
              setSidebarItem={setSidebarItem}
              icon={<CodeBracketIcon className="size-5" />}
              text="AI Code Review"
            />
            <SidebarItem
              sidebarItem={sidebarItem}
              setSidebarItem={setSidebarItem}
              icon={<CloudIcon className="size-5" />}
              text="Cloud Security"
            />
            <SidebarItem
              sidebarItem={sidebarItem}
              setSidebarItem={setSidebarItem}
              icon={<DocumentTextIcon className="size-5" />}
              text="How to Use"
            />
            <SidebarItem
              sidebarItem={sidebarItem}
              setSidebarItem={setSidebarItem}
              icon={<Cog6ToothIcon className="size-5" />}
              text="Settings"
            />
            <SidebarItem
              sidebarItem={sidebarItem}
              setSidebarItem={setSidebarItem}
              icon={<PhoneIcon className="size-5" />}
              text="Support"
            />
            <SidebarItem
              sidebarItem={sidebarItem}
              setSidebarItem={setSidebarItem}
              icon={<ArrowRightStartOnRectangleIcon className="size-5" />}
              text="Logout"
            />
          </div>
        )}

        <div className="hidden mt-3 lg:flex flex-col items-start justify-center gap-1">
          <button className="bg-white w-[180px] my-1 flex items-center gap-2 text-[#181D27] border-[1px] rounded-md p-2">
            <span className="text-sm">UtkarshDhairyaPa...</span>
            <ChevronDownIcon className="size-5" />
          </button>
          <SidebarItem
            sidebarItem={sidebarItem}
            setSidebarItem={setSidebarItem}
            icon={<HomeIcon className="size-5" />}
            text="Repositories"
          />
          <SidebarItem
            sidebarItem={sidebarItem}
            setSidebarItem={setSidebarItem}
            icon={<CodeBracketIcon className="size-5" />}
            text="AI Code Review"
          />
          <SidebarItem
            sidebarItem={sidebarItem}
            setSidebarItem={setSidebarItem}
            icon={<CloudIcon className="size-5" />}
            text="Cloud Security"
          />
          <SidebarItem
            sidebarItem={sidebarItem}
            setSidebarItem={setSidebarItem}
            icon={<DocumentTextIcon className="size-5" />}
            text="How to Use"
          />
          <SidebarItem
            sidebarItem={sidebarItem}
            setSidebarItem={setSidebarItem}
            icon={<Cog6ToothIcon className="size-5" />}
            text="Settings"
          />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="hidden lg:block">
        <SidebarItem
          sidebarItem={sidebarItem}
          setSidebarItem={setSidebarItem}
          icon={<PhoneIcon className="size-5" />}
          text="Support"
        />
        <SidebarItem
          sidebarItem={sidebarItem}
          setSidebarItem={setSidebarItem}
          icon={<ArrowRightStartOnRectangleIcon className="size-5" />}
          text="Logout"
        />
      </div>
    </div>
  );
};

export default Sidebar;
