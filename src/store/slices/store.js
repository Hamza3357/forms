import { configureStore } from "@reduxjs/toolkit";
import todo from './userSlice'

export const store = configureStore({
    reducer: {
newtodo: todo
    }
})