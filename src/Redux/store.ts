import { configureStore } from '@reduxjs/toolkit'
import Weather from './Reducers/Weather'
import TempConvertor from './Reducers/convertor'
import WeatherSearchData from './Reducers/Search'

export const store = configureStore({
  reducer: {
    WeatherReport: Weather,
    convert: TempConvertor,
    WeatherSearch: WeatherSearchData
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch