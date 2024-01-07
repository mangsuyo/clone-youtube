import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVideoDetails } from "../assets/api/videos";
import VideoDetailCard from "../components/VideoDetailCard";

export default function VideoDetail() {
  const params = useParams();
  const [videoDetail, setVideoDetail] = useState();
  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const data = await getVideoDetails(params.videoId);
        setVideoDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideoDetails();
    return () => {
      console.log("fetch 종료!");
    };
  }, []);

  return (
    <section>
      {videoDetail && <VideoDetailCard videoDetail={videoDetail} />}
    </section>
  );
}
