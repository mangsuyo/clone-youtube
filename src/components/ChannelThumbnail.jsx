import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { getChannelInfo } from "../assets/api/channel";

export default function ChannelThumbnail({ channelId, size }) {
  const {
    isPending,
    error,
    data: channelInfo,
  } = useQuery({
    queryKey: [channelId],
    queryFn: () => getChannelInfo(channelId),
  });
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
