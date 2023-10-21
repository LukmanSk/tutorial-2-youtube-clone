import { HiCheckCircle } from "react-icons/hi";

const thumbnailImage =
  "https://i.ytimg.com/vi/sW9npZVpiMI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClWGJ_k1Wb_e6UPGX-jVtmXRWVlw";
const channelLogo =
  "https://yt3.ggpht.com/ytc/APkrFKaOvPXaROHSo9YHQKoJ-isxL6vmTv1QXerejffA=s68-c-k-c0x00ffffff-no-rj";

const Video = () => {
  return (
    <>
      <div className="video__top rounded-lg overflow-hidden flex relative ">
        <img src={thumbnailImage} alt="" />
        <span className="px-2 py-1 bg-black text-white rounded-md absolute flex-end  right-0 bottom-0 opacity-[80%]">
          05:30
        </span>
      </div>

      <div className="text-content flex gap-2 px-2 py-4">
        <div className="video__channel flex gap-3 items-start">
          <div className="w-[36px] rounded-full overflow-hidden border">
            <img src={channelLogo} alt="" />
          </div>
        </div>
        <div className="info">
          <div className="title font-bold text-[16px]">
            why you NEED math for programming
          </div>
          <div className="channelTitle">
            <p className="text-[14px] text-[#606060] flex items-center gap-2">
              Joma Tech
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
