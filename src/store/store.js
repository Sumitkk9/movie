 import {configureStore} from '@reduxjs/toolkit'
 import FetchReducer from './features/fetcher'

 export const store = configureStore({
    reducer:FetchReducer
 })