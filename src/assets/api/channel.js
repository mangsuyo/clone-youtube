import axios from "axios";
import { httpClient } from "./videos";

export const getChannelInfo = async (channelId) => {
  return await httpClient
    .get("channels", {
      params: {
        part: "snippet",
        id: channelId,
      },
    })
    .then((response) => response.data);
};
