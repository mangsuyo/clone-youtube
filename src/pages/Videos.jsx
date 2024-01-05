import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getMostPopularVidoes } from "../assets/api/videos";

export default function Videos() {
  const [data, setData] = useState();

  const fetchVideos = async () => {
    try {
      const videos = await getMostPopularVidoes();
      setData(videos);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchVideos();
    return () => {
      console.log("Clean up!");
    };
  }, []);
  return (
    <section className="grid gap-2 grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
      {data &&
        data.map((video) => {
          const { title, channelTitle, publishedAt, thumbnails } =
            video.snippet;
          return (
            <article className="relative min-w-full min-h-[380px] md:min-h-[320px] lg:min-h-[280px] border-[1px]">
              <div>
                <img
                  className="m-auto min-w-full"
                  src={thumbnails.medium.url}
                />
              </div>
              <h1 className="mt-2 font-medium line-clamp-2 ">{title}</h1>
              <h2 className="absolute left-0 bottom-2">
                <span className="font-light text-sm text-gray-800">
                  {channelTitle}
                </span>
                <h3 className="mt-2 text-sm text-gray-400">{publishedAt}</h3>
              </h2>
            </article>
          );
        })}
    </section>
  );
}
