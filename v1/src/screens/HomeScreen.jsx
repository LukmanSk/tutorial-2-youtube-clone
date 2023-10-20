/* eslint-disable react/prop-types */
import CategoriesBar from "../components/CategoriesBar";
import Video from "../components/Video";

const HomeScreen = ({ className = "" }) => {
  return (
    <div className={`${className}  `}>
      <CategoriesBar />
      <div className="">
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
