/* eslint-disable react/prop-types */

const SidebarListItem = ({ children, text, onSelect, selectedItem }) => {
  const textLower = text?.toLowerCase();
  return (
    <div
      className={`${
        textLower === "log out" ? "border-t border-b py-4  rounded-none" : ""
      }`}
    >
      <li
        onClick={() => onSelect(text)}
        className={`${
          selectedItem === text ? "bg-[#F0F0F0]" : ""
        }  flex gap-4 items-center cursor-pointer  hover:bg-[#F0F0F0] px-4 py-2 rounded-lg`}
      >
        {children}
        <span className="capitalize hidden lg:block min-w-[10rem]">{text}</span>
      </li>{" "}
    </div>
  );
};

export default SidebarListItem;
