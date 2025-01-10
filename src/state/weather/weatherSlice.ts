import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Weatherparams {
    latitude: number;
    longitude: number;
}

interface WeatherResponse {
    weather: [
        {
            main: string;
            description: string;
            icon: string;
        }
    ],
    main: {
        temp: number;
        humidity: number;
    },
    wind: {
        speed: number;
    },
    sys: {
        country: string;
    },
    name: string;
    dt: number;
}

interface WeatherState {
    name: string | null;
    temp: number | null;
    hum: number | null;
    wind: number | null;
    loading: boolean;
    error: string | null;
    status: string;
    icon: string | null;
    dt: number | null;
    main: string;
    userPermition: boolean;
}

const API_URL = 'https://api.openweathermap.org';
const API_KEY = '71036b7b429c5db465121767cb81e243';

export const fetchWeather = createAsyncThunk<WeatherResponse, Weatherparams, { rejectValue: string }>(
    'weather/fetchWeather',
    async ({ latitude, longitude }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
            return response.data;
        } catch (error) {
            return rejectWithValue('Unable to fetch weather. Please try again.');
        }
    }
);


const initialState: WeatherState = {
    name: null,
    temp: null,
    hum: null,
    wind: null,
    loading: true,
    error: null,
    status: 'idle',
    icon: null,
    dt: null,
    main: 'loading...',
    userPermition: false
};


const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setPermitionTrue: (state) => {
            state.userPermition = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.name = action.payload.name;
                state.temp = action.payload.main.temp;
                state.hum = action.payload.main.humidity;
                state.wind = action.payload.wind.speed;
                state.icon = action.payload.weather[0].icon;
                state.dt = action.payload.dt
                state.main = action.payload.weather[0].main
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to fetch weather data';
            });
    },
});

export const { setPermitionTrue } = weatherSlice.actions;
export default weatherSlice.reducer;