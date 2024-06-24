// src/store/slices/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        editTodo: (state, action) => {
            const { index, newTodo } = action.payload;
            state[index] = newTodo;
        },
        deleteTodo: (state, action) => {
            return state.filter((_, index) => index !== action.payload);
        }
    }
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;


