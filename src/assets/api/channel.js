import axios from "axios";
import { PRIVATE_KEY } from "./core";

export const getChannelInfo = (channelId) => {
  const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${PRIVATE_KEY}`;
  const data = axios.get(url).then((response) => {
    return response.data;
  });

  return data;
};
