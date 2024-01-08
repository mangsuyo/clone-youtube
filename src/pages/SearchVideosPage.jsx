import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getVideoByKeyword } from "../assets/api/videos";
import VideoCard from "../components/VideoCard";

export default function SearchVideosPage() {
  const { keyword } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => getVideoByKeyword(keyword),
  });
  return (
    <div>
      {data &&
        data.items.map((video) => <VideoCard video={video} keyword={true} />)}
    </div>
  );
}
