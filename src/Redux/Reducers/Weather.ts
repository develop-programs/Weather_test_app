import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("Weather/Data", async (params: any) => {
    const response = await axios.get("http://api.weatherapi.com/v1/forecast.json?key=4e51732bd7d9449b9ec40408233006&q=" + params.coords.latitude + "," + params.coords.longitude + "&days=3&aqi=no")
    return response.data
})
export const WeatherData = createSlice(
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
                .addCase(fetchData.pending, (state: any, _action: any) => {
                    state.loading = "true"
                    state.error = "none"
                })
                .addCase(fetchData.rejected, (state: any, action: any) => {
                    state.loading = "false"
                    state.error = action.error.message
                })
                .addCase(fetchData.fulfilled, (state: any, action: any) => {
                    state.loading = "false"
                    state.error = "none"
                    state.data = action.payload
                })
        }
    }
)
export default WeatherData.reducer