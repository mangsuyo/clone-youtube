import React from "react";
import { useState } from "react";
import ChannelThumbnail from "./ChannelThumbnail";

export default function VideoDetailCard({ videoDetail }) {
  const [isClicked, setIsClicked] = useState(false);
  const videoId = videoDetail.items[0].id;
  const { channelId, channelTitle, title, description, publishedAt } =
    videoDetail.items[0].snippet;
  const { viewCount, commentCount } = videoDetail.items[0].statistics;
  const firstLine = description.split("\n")[0];
  const handleToggleClick = (event) => {
    setIsClicked((prev) => !prev);
  };
  return (
    <article>
      <iframe
        id="player"
        type="text/html"
        width="100%"
        height="400px"
        src={`https://www.youtube.com/embed/${videoId}`}
        className="border-4 lg:h-[500px] xl:h-[700px] "
      ></iframe>
      <div className="mt-5">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="mt-3 flex items-center">
          <ChannelThumbnail channelId={channelId} />
          <div>{channelTitle}</div>
        </div>
        <div
          className="mt-5 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-md p-3"
          onClick={handleToggleClick}
        >
          <span className="font-medium">조회수 {viewCount}회</span>
          <span className="ml-5 font-light"> {publishedAt}</span>
          <p className="mt-5">{isClicked ? description : firstLine}</p>
        </div>
      </div>
    </article>
  );
}
