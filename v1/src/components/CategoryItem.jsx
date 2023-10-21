/* eslint-disable react/prop-types */

const CategoryItem = ({ keyword, onSelect, selectedCategory }) => {
  return (
    <span
      onClick={() => onSelect(keyword)}
      className={`${
        selectedCategory === keyword ? "bg-black text-white" : ""
      } bg-[#F2F2F2] px-4 py-1 rounded-lg hover:bg-black hover:text-white cursor-pointer card w-max`}
    >
      {keyword}
    </span>
  );
};

export default CategoryItem;
