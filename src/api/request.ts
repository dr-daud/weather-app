import axios from "axios";

const API_URL = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=1&appid={API key}';
const API_KEY = '71036b7b429c5db465121767cb81e243';

export const getData = axios({ url: `${API_URL}` })