import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getVideoByKeyword } from "../assets/api/videos";
import VideoCard from "../components/VideoCard";

export default function SearchVideosPage() {
  const params = useParams();
  const [data, setData] = useState();
  const fetchVideoByKeyword = async (keyword) => {
    const data = await getVideoByKeyword(keyword);
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchVideoByKeyword(params.keyword);
  }, []);
  return (
    <div>{data && data.items.map((video) => <VideoCard video={video} />)}</div>
  );
}
