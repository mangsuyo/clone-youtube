import axios from "axios";
import { PRIVATE_KEY } from "./core";

export const getMostPopularVidoes = async () => {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=50&key=${PRIVATE_KEY}`;
  return await axios.get(url).then((response) => response.data.items);
};

export const getVideoDetails = async (videoId) => {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${PRIVATE_KEY}`;
  return await axios.get(url).then((response) => response.data);
};

export const getVideoByKeyword = async (keyword) => {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${PRIVATE_KEY}`;
  return await axios.get(url).then((response) => response.data);
};
