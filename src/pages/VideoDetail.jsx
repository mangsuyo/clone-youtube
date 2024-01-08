import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVideoDetails } from "../assets/api/videos";
import VideoDetailCard from "../components/VideoDetailCard";

export default function VideoDetail() {
  const { videoId } = useParams();
  const {
    isPending,
    error,
    data: videoDetail,
  } = useQuery({
    queryKey: [videoId],
    queryFn: async () => getVideoDetails(videoId),
  });

  return (
    <section>
      {videoDetail && <VideoDetailCard videoDetail={videoDetail} />}
    </section>
  );
}
