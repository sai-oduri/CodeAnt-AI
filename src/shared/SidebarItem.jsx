const SidebarItem = ({ sidebarItem, setSidebarItem, icon, text }) => {
  let val = text.replace(' ', '').toLowerCase();

  let selectedStyles;

  if (sidebarItem === val) {
    selectedStyles = 'lg:bg-[#1570EF] lg:text-white';
  }

  if (val === 'logout' || val === 'support') {
    val = sidebarItem;
    selectedStyles = '';
  }

  return (
    <button
      className={`${selectedStyles} lg:transition lg:duration-300 lg:hover:bg-[#1570EF] lg:hover:text-white flex text-[#414651] m-[1px] items-center gap-2 justify-start w-[180px] py-2 px-3  rounded-md`}
      onClick={() => setSidebarItem(val)}
    >
      {icon}
      <p className="font-semibold">{text}</p>
    </button>
  );
};

export default SidebarItem;
