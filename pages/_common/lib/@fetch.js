import axios from 'axios';
import getConfig from 'next/config';
const config = getConfig().publicRuntimeConfig;
const fetch = axios.create({
  baseURL: `${config.server}/api`,
  timeout: 1000,
});


export const Get = async (url, data) => {
  return await fetch.get(`${url}`, { params: { ...data } });
}

export const Post = async (url, data) => {
  return await fetch.post(`${url}`, { ...data });
}
