import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const params = useParams();

  return <div>{params.videoId} 상세페이지 입니다.</div>;
}
