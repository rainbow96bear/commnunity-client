import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./slices/userInfo";
import category from "./slices/category";
import post from "./slices/post";

export const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
    category: category,
    post: post,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
