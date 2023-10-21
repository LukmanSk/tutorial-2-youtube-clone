/* eslint-disable react/prop-types */

const SidebarListItem = ({ children, text, onSelect, selectedItem }) => {
  const textLower = text?.toLowerCase();
  return (
    <>
      <li
        onClick={() => onSelect(text)}
        className={`${selectedItem === text ? "bg-[#F0F0F0]" : ""} ${
          textLower === "log out" ? "border-t border-b py-4  rounded-none" : ""
        } flex gap-4 items-center cursor-pointer  hover:bg-[#F0F0F0] px-4 py-2 rounded-lg`}
      >
        {children}
        <span className="capitalize hidden lg:block min-w-[10rem]">{text}</span>
      </li>{" "}
    </>
  );
};

export default SidebarListItem;
