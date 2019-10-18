import axios from 'axios';
import getConfig from 'next/config';
import Crypto from './CryptoJS';


const config = getConfig().publicRuntimeConfig;
const Cryptor = Crypto(config.cryptoKey);
const Encrypt = function (data) {
  return Cryptor.Encrypt(JSON.stringify(data));
}
const Decrypt = function (text) {
  return JSON.parse(Cryptor.Decrypt(text));
}

const fetch = axios.create({
  baseURL: `${config.server}/api`,
  timeout: 1000,
  headers: { 'content-type': 'application/json' },
});


export const Get = async (url, data) => {
  const response = await fetch.get(`${url}`, { params: { ...data } })
  return Decrypt(response.data.CryptoData);
}

export const Post = async (url, data) => {
  const req = { ...data };
  const response = await fetch.post(`${url}`, { CryptoData: Encrypt(req) });
  return Decrypt(response.data.CryptoData);
}


