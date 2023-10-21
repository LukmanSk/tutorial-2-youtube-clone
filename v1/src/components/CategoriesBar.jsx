/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import CategoryItem from "./CategoryItem";

const carouselClasses = `grid grid-flow-col overflow-x-auto overscroll-x-contain scroll-snap-type-x mandatory scrollbar-none`;

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art ",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];
const CategoriesBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div
      className={`${carouselClasses} gap-4 mx-auto  p-4 carousel w-[97.5%] `}
    >
      {keywords?.map((keyword, i) => (
        <CategoryItem
          key={i}
          keyword={keyword}
          onSelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      ))}
    </div>
  );
};

export default CategoriesBar;
