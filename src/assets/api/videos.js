import axios from "axios";
import { httpClient } from "./core";

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
  return await httpClient
    .get("videos", {
      params: {
        part: "snippet%2CcontentDetails%2Cstatistics",
        id: videoId,
      },
    })
    .then((response) => response.data);
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
