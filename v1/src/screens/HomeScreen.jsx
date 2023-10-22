/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CategoriesBar from "../components/CategoriesBar";
import Video from "../components/Video";

const KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  function fetchSelectedCategoryData(query) {
    setLoading(true);
    fetch(`${BASE_URL}/search?key=${KEY}&part=snippet&q=${query}&maxResults=20`)
      .then((res) => res?.json())
      .then((data) => {
        setSearchResults(data?.items);
        console.log(data?.items);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchSelectedCategoryData("new");
  }, []);

  return (
    <div className={` container mx-auto  grid`}>
      <CategoriesBar />
      <div className="grid grid-cols-1 gap-4 px-4 py-6  sm:grid-cols-2 md:grid-cols-3    ">
        {searchResults.map((item, i) => (
          <div key={i}>
            <Video
              id={item?.id?.videoId}
              title={item?.snippet?.title}
              thumbnail={item?.snippet?.thumbnails?.high?.url}
              snippet={item?.snippet}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
