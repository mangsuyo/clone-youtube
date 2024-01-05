import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getMostPopularVidoes } from "../assets/api/videos";
import VideoCard from "../components/VideoCard";

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
      {data && data.map((video) => <VideoCard video={video} />)}
    </section>
  );
}
