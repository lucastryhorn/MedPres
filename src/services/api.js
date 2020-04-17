import axios from 'axios';
import getToken from '../utils/getToken';

export function* createHeader() {
  const header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${yield getToken()}`,
  };
  return header;
}

const consumerApi = axios.create({
  baseURL: 'http://177.52.112.154:8080',
  timeout: 10000,
  headers: {},
});

export default consumerApi;
