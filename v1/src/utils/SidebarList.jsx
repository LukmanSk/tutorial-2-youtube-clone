import { GoHome } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import SidebarListItem from "./SidebarListItem";
const sideList = [
  { id: 1, text: "Home", icon: <GoHome className="text-[28px]" /> },
  {
    id: 2,
    text: "subscriptions",
    icon: <MdOutlineSubscriptions className="text-[28px]" />,
  },
  { id: 3, text: "Home", icon: <GoHome className="text-[28px]" /> },
  { id: 4, text: "Home", icon: <GoHome className="text-[28px]" /> },
  { id: 5, text: "Home", icon: <GoHome className="text-[28px]" /> },
  { id: 6, text: "Home", icon: <GoHome className="text-[28px]" /> },
];
const SidebarList = () => {
  return (
    <ul className="pl-2 w-[90%] grid gap-2">
      {sideList.map((item) => (
        <SidebarListItem key={item.id} text={item.text}>
          {item.icon}
        </SidebarListItem>
      ))}
    </ul>
  );
};

export default SidebarList;
