import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: PRIVATE_KEY,
  },
});

export const getMostPopularVidoes = async () => {
  return await httpClient
    .get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode: "US",
        maxResults: 50,
      },
    })
    .then((response) => response.data.items);
};

export const getVideoDetails = async (videoId) => {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${PRIVATE_KEY}`;
  return await axios.get(url).then((response) => response.data);
};

export const getVideoByKeyword = async (keyword) => {
  return await httpClient
    .get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        q: keyword,
      },
    })
    .then((response) => response.data);
};
