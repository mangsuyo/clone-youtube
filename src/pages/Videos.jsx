import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMostPopularVidoes } from "../assets/api/videos";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { isPending, error, data } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => getMostPopularVidoes(),
  });

  return (
    <section className="grid gap-2 grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
      {isPending && <div>Loading..</div>}
      {error && <div>Something wrong 🥹</div>}
      {data && data.map((video) => <VideoCard key={video.id} video={video} />)}
    </section>
  );
}
