import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType } from "src/types";

interface PostState {
  post: PostType;
  editPost: PostType;
}

const initialState: PostState = {
  editPost: {
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
  name: "post",
  initialState,
  reducers: {
    setEditPost(state, action: PayloadAction<PostType>) {
      state.editPost = action.payload;
    },
    clearEditPost(state) {
      state.editPost = initialState.post;
    },
  },
});

export const { setEditPost, clearEditPost } = categorySlice.actions;

export default categorySlice.reducer;
