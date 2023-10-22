import { useEffect, useState } from "react";
import { HiCheckCircle } from "react-icons/hi";

const KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const thumbnailImage =
  "https://i.ytimg.com/vi/sW9npZVpiMI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClWGJ_k1Wb_e6UPGX-jVtmXRWVlw";
const channelLogo =
  "https://yt3.ggpht.com/ytc/APkrFKaOvPXaROHSo9YHQKoJ-isxL6vmTv1QXerejffA=s68-c-k-c0x00ffffff-no-rj";

const Video = ({ title, thumbnail, snippet }) => {
  const url = `${BASE_URL}/channels?key=${KEY}&part=snippet&id=${snippet?.channelId}`;
  const [channelInfo, setChannelInfo] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setChannelInfo(data?.items?.at(0)?.snippet));
  }, []);
  console.log(channelInfo);
  return (
    <>
      <div className="video__top rounded-lg  flex relative | aspect-w-16 aspect-h-9 overflow-hidden | w-full h-[50vw] sm:h-[23vw] md:h-[40vw] lg:h-[14vw]">
        <img
          className="w-full h-full object-cover | absolute inset-0  object-center"
          src={thumbnail}
          alt=""
        />

        <span className="px-2 py-1 bg-black text-white rounded-md absolute flex-end  right-0 bottom-0 opacity-[80%]">
          05:30
        </span>
      </div>

      <div className="text-content flex gap-2 px-2 py-4">
        <div className="video__channel flex gap-3 items-start">
          <div className="w-[36px] rounded-full overflow-hidden border">
            <img src={channelInfo?.thumbnails?.high?.url} alt="" />
          </div>
        </div>
        <div className="info ">
          <p className="title font-bold text-[16px] ">{title}</p>
          <div className="channelTitle">
            <p className="text-[14px] text-[#606060] flex items-center gap-2">
              {snippet?.channelTitle}
              <span>
                <HiCheckCircle className="text-[20px] text-[#606060]" />
              </span>
            </p>
          </div>
          <div className="details flex gap-1 text-[#606060]">
            <p>8M views</p>
            <span> . </span>
            <p>2 years ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
