// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice';
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        user: userSlice
    }
});
