/* eslint-disable react/prop-types */
import { AiOutlineMenu } from "react-icons/ai";
import SidebarList from "../utils/SidebarList";

const Sidebar = ({ className = "" }) => {
  return (
    <div className={`${className} absolute top-0 bg-white h-screen hidden `}>
      <div className="col flex items-center gap-3 pl-2 py-5 px-20 border mb-3">
        <AiOutlineMenu className="text-[28px]" />
        <div className="w-[6.5rem]">
          <img
            className="w-full aspect-auto"
            src="https://i.imgur.com/xt54wky.png"
            alt="Youtube"
          />
        </div>
      </div>
      <div className="wrapper">
        <SidebarList />
      </div>
    </div>
  );
};

export default Sidebar;
