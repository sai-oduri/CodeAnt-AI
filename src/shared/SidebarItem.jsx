const SidebarItem = ({ sidebarItem, setSidebarItem, icon, text }) => {

  let val = text.replace(" ", "").toLowerCase();

  let selectedStyles;

  if (sidebarItem === val) {
    selectedStyles = "bg-[#1570EF] text-white";
  }

  if (val === "logout" || val === "support") {
    val = sidebarItem;
    selectedStyles = "";
  }

  return (
    <button
      className={`${selectedStyles} transition duration-500 hover:bg-[#1570EF] hover:text-white flex text-[#414651] m-[1px] items-center gap-2 justify-start w-[180px] py-2 px-3  rounded-md`}
      onClick={() => setSidebarItem(val)}
    >
      {icon}
      <p className="font-medium">{text}</p>
    </button>
  )
}

export default SidebarItem