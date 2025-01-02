import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Location {
    latitude: number;
    longitude: number;
}

interface LocationState {
    latitude: number | null;
    longitude: number | null;
    loading: boolean;
    error: string | null;
}

export const fetchLocation = createAsyncThunk<Location, void, { rejectValue: string }>(
    'location/fetchLocation',
    async (_, { rejectWithValue }) => {
        const getPosition = (): Promise<Location> => {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        resolve({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                    },
                    (error) => reject(error));
            });
        };

        try {
            const location = await getPosition();
            return location;
        } catch (error) {
            return rejectWithValue('Unable to fetch location. Please try again.');
        }
    }
);

const initialState: LocationState = {
    latitude: null,
    longitude: null,
    loading: false,
    error: null,
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLocation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLocation.fulfilled, (state, action) => {
                state.loading = false;
                state.latitude = action.payload.latitude;
                state.longitude = action.payload.longitude;
            })
            .addCase(fetchLocation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Unknown error occurred';
            });
    },
});

export default locationSlice.reducer;