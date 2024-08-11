// src/features/like/likeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    likes: 0,
};

export const connectSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        increment: (state) => {
            state.likes += 1;
        },
    }
});

export const { increment } = connectSlice.actions;

export default connectSlice.reducer;

