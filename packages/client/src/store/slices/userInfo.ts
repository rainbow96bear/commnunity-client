import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { UserInfo } from "src/types/UserInfo";

interface User {
  user: UserInfo;
}

const initialState: User = {
  user: {
    platform: "",
    id: "",
    nickname: "",
    // profile_image는 기본 이미지로 수정
    profile_image: "",
    wallet: "",
  },
};

export const fetchSessionUserInfo = createAsyncThunk<User>(
  "userInfo/fetchSessionUserInfo",
  async () => {
    const response = await axios.get<User>(
      "http://localhost:8000/api/v1/userinfo",
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    updateUserInfo(state, action: PayloadAction<UserInfo>) {
      state.user = action.payload;
    },
    deleteUserInfo(state) {
      state.user = initialState.user;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessionUserInfo.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(fetchSessionUserInfo.rejected, (state, action) => {
        console.error("Error fetching session user info:", action.error);
      });
  },
});

export const { updateUserInfo, deleteUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
