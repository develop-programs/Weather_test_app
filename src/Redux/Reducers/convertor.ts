import { createSlice } from "@reduxjs/toolkit";


export const TempConvertor = createSlice({
    name: "TempConvert",
    initialState: {
        value: true
    },
    reducers: {
        convert: (state: any) => {
            state.value = ! state.value
        }
    }
})

export const { convert } = TempConvertor.actions
export default TempConvertor.reducer