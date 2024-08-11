import { configureStore } from "@reduxjs/toolkit";
import { avatarSlice } from "./slices/avatarSlice";

import {connectSlice} from "./slices/connectSlice";


export const store = configureStore({
    reducer:{
        avatar: avatarSlice.reducer,
        like: connectSlice.reducer,
    
    }
})