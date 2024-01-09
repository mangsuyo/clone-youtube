import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: PRIVATE_KEY,
  },
});

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
