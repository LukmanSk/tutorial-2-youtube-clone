/* eslint-disable react/prop-types */

const SidebarListItem = ({ children, text }) => {
  const textLower = text?.toLowerCase();
  return (
    <>
      <li className="flex gap-4 items-center cursor-pointer hover:bg-[#F0F0F0] px-4 py-2 rounded-lg">
        {children}
        <span className="capitalize">{text}</span>
      </li>{" "}
      {textLower === "subscriptions" && <hr className="text-black" />}
    </>
  );
};

export default SidebarListItem;
