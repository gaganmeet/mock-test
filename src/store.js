import { configureStore } from '@reduxjs/toolkit'
import { mailApi } from './api'
import mailReducer from './mail'
export const store = configureStore({
  reducer: {
    [mailApi.reducerPath]: mailApi.reducer,
    mail: mailReducer,
  },
})
