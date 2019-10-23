import axios from 'axios';
import getConfig from 'next/config';
import Crypto from './CryptoJS';


const config = getConfig().publicRuntimeConfig;


const fetch = axios.create({
  baseURL: `${config.server}/api`,
  timeout: 1000,
  headers: { 'content-type': 'application/json' },
});


export const Get = async (url, data) => {
  const response = await fetch.get(`${url}`, { params: { ...data } })
  return Crypto.Decrypt(response.data.cryptodata);
}

export const Post = async (url, data) => {
  const req = { ...data };
  const response = await fetch.post(`${url}`, { cryptodata: Crypto.Encrypt(req) });
  return Crypto.Decrypt(response.data.cryptodata);
}


