import { configureStore } from '@reduxjs/toolkit'
import Weather from './Reducers/Weather'
import TempConvertor from './Reducers/convertor'
import WeatherSearchData from './Reducers/Search'
import Switch from './Reducers/switch'

export const store = configureStore({
  reducer: {
    WeatherReport: Weather,
    convert: TempConvertor,
    WeatherSearch: WeatherSearchData,
    switch: Switch
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch