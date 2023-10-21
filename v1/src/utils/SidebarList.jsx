import { GoHome, GoHistory } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { FaRegFaceFrown } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import SidebarListItem from "./SidebarListItem";
import { useState } from "react";
const sideList = [
  { id: 1, text: "home", icon: <GoHome className="text-[28px]" /> },
  {
    id: 2,
    text: "subscriptions",
    icon: <MdOutlineSubscriptions className="text-[28px]" />,
  },
  { id: 3, text: "liked video", icon: <BiLike className="text-[28px]" /> },
  { id: 4, text: "history", icon: <GoHistory className="text-[28px]" /> },
  {
    id: 5,
    text: "library",
    icon: <MdOutlineVideoLibrary className="text-[28px]" />,
  },
  {
    id: 6,
    text: "I don't know",
    icon: <FaRegFaceFrown className="text-[28px]" />,
  },
  { id: 6, text: "Log Out", icon: <FiLogOut className="text-[28px]" /> },
];
const SidebarList = () => {
  const [selectedItem, setSelectedItem] = useState("home");
  return (
    <ul className="w-[90%] grid gap-2">
      {sideList.map((item) => (
        <SidebarListItem
          key={item.id}
          text={item.text}
          onSelect={setSelectedItem}
          selectedItem={selectedItem}
        >
          {item.icon}
        </SidebarListItem>
      ))}
    </ul>
  );
};

export default SidebarList;
