import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChannelThumbnail from "./ChannelThumbnail";

export default function VideoCard({ video, keyword }) {
  const navigate = useNavigate();
  const { title, channelId, channelTitle, publishedAt, thumbnails } =
    video.snippet;
  const handleClickVideoCard = () => {
    navigate(`/videos/${keyword ? video.id.videoId : video.id}`);
  };

  return (
    <article
      onClick={handleClickVideoCard}
      className={`rounded-xl overflow-hidden min-w-full cursor-pointer hover:bg-gray-200 ${
        keyword
          ? "flex my-2 max-h-[240px] md:max-h-[220px]"
          : "relative min-h-[380px] md:min-h-[320px] lg:min-h-[280px] "
      }`}
    >
      <div>
        <img
          className={`  ${
            keyword
              ? "min-w-[300px] max-w-[300px] h-[200px] rounded-lg"
              : "m-auto min-w-full min-h-full"
          }`}
          src={thumbnails.medium.url}
        />
      </div>
      <div className={`${keyword ? "relative px-3" : ""}`}>
        <h1 className={`mt-2 font-medium line-clamp-2 ${keyword ? "" : ""}`}>
          {title}
        </h1>
        <h2
          className={` ${
            keyword ? "absolute left-2 bottom-2" : "absolute left-0 bottom-2"
          }`}
        >
          <div className="flex items-center">
            <ChannelThumbnail channelId={channelId} size="small" />
            <span className="font-light text-sm text-gray-800 line-clamp-1">
              {channelTitle}
            </span>
          </div>
          <h3 className="mt-2 text-sm text-gray-400">{publishedAt}</h3>
        </h2>
      </div>
    </article>
  );
}
