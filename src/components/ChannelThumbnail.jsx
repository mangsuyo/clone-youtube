import React from "react";
import { useState } from "react";
import { getChannelInfo } from "../assets/api/channel";

export default function ChannelThumbnail({ channelId }) {
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
        <div className="w-[50px] h-[50px] bg-white mr-3">
          <img
            className="rounded-[50%]"
            src={channelInfo.items[0].snippet.thumbnails.default.url}
          />
        </div>
      )}
    </>
  );
}
