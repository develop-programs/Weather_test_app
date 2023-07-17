import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchData = createAsyncThunk("Weather/Data", async (params: any) => {
    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+params+"&appid=d18bd24c69d10c118a6c9ae6b6c60d00")
    return await response.data
})
export const WeatherSearchData = createSlice(
    {
        name: "Weather",
        initialState: {
            data: {},
            loading: 'idle',
            error: 'idle'
        },
        reducers: {
        },
        extraReducers: (builders) => {
            builders
                .addCase(fetchSearchData.pending, (state: any, _action: any) => {
                    state.loading = "true"
                    state.error = "none"
                })
                .addCase(fetchSearchData.rejected, (state: any, action: any) => {
                    state.loading = "false"
                    state.error = action.error.message
                })
                .addCase(fetchSearchData.fulfilled, (state: any, action: any) => {
                    state.loading = "false"
                    state.error = "none"
                    state.data = action.payload
                })
        }
    }
)
export default WeatherSearchData.reducer