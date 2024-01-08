import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getVideoByKeyword } from "../assets/api/videos";
import VideoCard from "../components/VideoCard";

export default function SearchVideosPage() {
  const { keyword } = useParams();
  const [data, setData] = useState();
  const fetchVideoByKeyword = async (keyword) => {
    const data = await getVideoByKeyword(keyword);
    setData(data);
  };
  useEffect(() => {
    fetchVideoByKeyword(keyword);
  }, [keyword]);
  return (
    <div>
      {data &&
        data.items.map((video) => <VideoCard video={video} keyword={true} />)}
    </div>
  );
}
