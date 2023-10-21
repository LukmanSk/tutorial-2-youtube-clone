/* eslint-disable react/prop-types */
import CategoriesBar from "../components/CategoriesBar";
import Video from "../components/Video";

const HomeScreen = () => {
  return (
    <div className={` container mx-auto border border-red-800 grid`}>
      <CategoriesBar />
      <div className="grid grid-cols-3 gap-4 px-4 py-6 ">
        {[...new Array(20)].map((_, i) => (
          <div key={i}>
            <Video />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
