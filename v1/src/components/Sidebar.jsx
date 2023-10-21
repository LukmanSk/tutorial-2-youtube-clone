/* eslint-disable react/prop-types */

import SidebarList from "../utils/SidebarList";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`bg-white h-screen transition-all duration-[.3s] 
      ${isOpen ? "" : "translate-x-[-100%]"}`}
    >
      <div className={`${isOpen ? "" : "hidden ease-out"} wrapper pt-4`}>
        <SidebarList />
      </div>
    </div>
  );
};

export default Sidebar;
