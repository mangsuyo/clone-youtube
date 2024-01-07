import React from "react";
import { useState } from "react";
import { getChannelInfo } from "../assets/api/channel";

export default function ChannelThumbnail({ channelId, size }) {
  console.log(size);
  const [channelInfo, setChannelInfo] = useState();
  useState(() => {
    const fetchChannelInfo = async () => {
      const data = await getChannelInfo(channelId);
      setChannelInfo(data);
    };
    fetchChannelInfo();
  }, []);
  return (
    <>
      {channelInfo && (
        <div
          className={` bg-white mr-3 ${
            size === "small" ? "w-[25px] h-[25px]" : "w-[50px] h-[50px]"
          }`}
        >
          <img
            className="rounded-[50%]"
            src={channelInfo.items[0].snippet.thumbnails.default.url}
          />
        </div>
      )}
    </>
  );
}
