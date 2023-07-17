import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchData = createAsyncThunk("Weather/Data", async (params: any) => {
    const response = await axios.get("http://api.weatherapi.com/v1/forecast.json?key=4e51732bd7d9449b9ec40408233006&q=" + params + "&days=3&aqi=no")
    return response.data
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