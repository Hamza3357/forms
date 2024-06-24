// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../slices/userSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
});
