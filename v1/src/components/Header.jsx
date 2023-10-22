/* eslint-disable react/prop-types */

import { AiOutlineVideoCameraAdd, AiOutlineMenu } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = ({ className = "", onToggleMenu }) => {
  return (
    <div className={`${className}`}>
      <div className="px-4 py-2  flex lg:gap-[4rem] justify-between">
        <div className="col flex items-center gap-6 ">
          <AiOutlineMenu
            className="text-[28px] hidden sm:block cursor-pointer"
            onClick={onToggleMenu}
          />
          <div className="w-[6.5rem]">
            <img
              className="w-full aspect-auto"
              src="https://i.imgur.com/xt54wky.png"
              alt="Youtube"
            />
          </div>
        </div>
        <div className="form-group hidden  w-full lg:flex">
          <input
            type="text"
            placeholder="Search"
            className="border border-[#F0F0F0] outline-[#065FD4] py-2 px-6 w-full rounded-tl-[1000px] rounded-bl-[1000px]"
          />
          <button
            type="submit"
            className="border border-#F0F0F0 py-2 px-6 rounded-tr-[1000px] rounded-br-[1000px] border-l-0 bg-[#F0F0F0]  outline-none"
          >
            <GoSearch className="text-[20px]" />
          </button>
        </div>
        <div className=" flex gap-1 md:gap-3 lg:gap-6">
          <div className=" p-2  rounded-full hover:bg-[#F0F0F0] transition-all duration-[.3s]">
            <GoSearch className="text-[30px] lg:hidden" />
          </div>
          <div className=" p-2  rounded-full hover:bg-[#F0F0F0] transition-all duration-[.3s]">
            <AiOutlineVideoCameraAdd className="text-[30px]" />
          </div>
          <div className=" p-2  rounded-full hover:bg-[#F0F0F0] transition-all duration-[.3s]">
            <IoIosNotificationsOutline className="text-[30px]" />
          </div>
          <div className="rounded-full hover:bg-[#F0F0F0] transition-all duration-[.3s] w-[3rem] overflow-hidden">
            <img
              src="https://i.imgur.com/tajDXkN.jpg"
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
