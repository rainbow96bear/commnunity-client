import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "src/types/Post";

interface PostState {
  post: Post;
}

const initialState: PostState = {
  post: {
    id: "",
    category: "",
    subcategory: "",
    title: "",
    content: "",
    createdAt: "",
    userId: "",
    user: {
      nickname: "",
    },
  },
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setEditPost(state, action: PayloadAction<Post>) {
      console.log(action.payload);
      state.post = action.payload;
    },
    clearEditPost(state) {
      state.post = initialState.post;
    },
  },
});

export const { setEditPost, clearEditPost } = categorySlice.actions;

export default categorySlice.reducer;
