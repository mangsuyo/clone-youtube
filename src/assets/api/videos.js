import axios from "axios";
import { PRIVATE_KEY } from "./core";

export const getMostPopularVidoes = async () => {
  // const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=50&key=${PRIVATE_KEY}`;
  const url = "data/videos.json";
  const data = await axios.get(url).then((response) => {
    return response.data.items;
  });
  return data;
};
