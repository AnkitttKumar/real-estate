import {configureStore} from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
// import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
export const store = configureStore({
    reducer:{user:userReducer},
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false,
        }),
})