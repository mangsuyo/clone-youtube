import React from "react";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;
  const handleClickVideoCard = () => {
    navigate(`/videos/${video.id}`);
  };

  return (
    <article
      onClick={handleClickVideoCard}
      className="relative min-w-full cursor-pointer min-h-[380px] md:min-h-[320px] lg:min-h-[280px] border-[1px]"
    >
      <div>
        <img className="m-auto min-w-full" src={thumbnails.medium.url} />
      </div>
      <h1 className="mt-2 font-medium line-clamp-2 ">{title}</h1>
      <h2 className="absolute left-0 bottom-2">
        <span className="font-light text-sm text-gray-800">{channelTitle}</span>
        <h3 className="mt-2 text-sm text-gray-400">{publishedAt}</h3>
      </h2>
    </article>
  );
}
