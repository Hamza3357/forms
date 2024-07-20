import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    authenticated: false,
    registrationStatus: '', // To track registration status
    signInStatus: '', // To track sign-in status
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        register: (state, action) => {
            let users = JSON.parse(localStorage.getItem('users')) || [];
            const existingUser = users.find(user => user.email === action.payload.email);

            if (existingUser) {
                state.registrationStatus = 'User already registered';
            } else {
                users.push(action.payload);
                localStorage.setItem("users", JSON.stringify(users));
                state.user = action.payload;
                state.authenticated = true;
                state.registrationStatus = 'Registration successful';
            }
        },
        signIn: (state, action) => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const savedUser = users.find(user => user.email === action.payload.email && user.password === action.payload.password);

            if (savedUser) {
                state.user = savedUser;
                state.authenticated = true;
                state.signInStatus = 'Sign-in successful';
            } else {
                state.signInStatus = 'Invalid email or password';
            }
        },
        signOut: (state) => {
            state.user = null;
            state.authenticated = false;
        },
    },
});

export const { register, signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
