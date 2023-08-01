import { createSlice } from "@reduxjs/toolkit";


export const Switch = createSlice({
    name: "TempConvert",
    initialState: {
        value: true
    },
    reducers: {
        switchval: (state: any) => {
            state.value = !state.value
        }
    }
})

export const { switchval } = Switch.actions
export default Switch.reducer