import fetch from 'axios';
import getConfig from 'next/config';
const config = getConfig().publicRuntimeConfig;

export const fetchLocal = {
    async get(url,data){
        return await fetch.get(`${config.server}${url}`);
    }
}  