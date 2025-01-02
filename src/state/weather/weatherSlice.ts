import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Weather {
    name: string;
    temp: number;
    hum: number;
    wind: number;
}

interface WeatherState {
    name: string | null;
    temp: number | null;
    hum: number | null;
    wind: number | null;
    loading: boolean;
    error: string | null;
}

const API_URL = 'https://api.openweathermap.org';
const API_KEY = '71036b7b429c5db465121767cb81e243';

export const fetchWeather = createAsyncThunk<Weather, void>(
    'weather/fetchWeather',
    async (_, { rejectedWithValue }) => {
        const getData = async () => {
            try {
                const res = await axios({
                    url: `${API_URL}/data/2.5/weather?lat=${action.payload.latitude}&lon=${longitude}&appid=${API_KEY}`,
                    method: 'GET'
                });
                console.log(res)
                return res
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log(error.response?.data.errText, 'error');
                } else if (error instanceof Error) {
                    console.log(error.message)
                }
            }
        };
    }
)



const initialState: WeatherState = {
    name: null,
    temp: null,
    hum: null,
    wind: null,
    loading: true,
    error: null
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
});

export default weatherSlice.reducer