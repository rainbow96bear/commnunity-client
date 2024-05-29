import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { UserInfo } from "src/types/UserInfo";

interface UserState {
  userInfo: UserInfo;
}

const initialState: UserState = {
  userInfo: {
    id: "",
    nickname: "",
    profile_image: "",
    wallet: "",
  },
};

export const fetchSessionUserInfo = createAsyncThunk<UserState, string>(
  "userInfo/fetchSessionUserInfo",
  async (id) => {
    const response = await axios.get<UserState>("/api/v1/userinfo", {
      withCredentials: true,
      data: { id },
    });
    return response.data;
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    updateUserInfo(state, action: PayloadAction<UserState>) {
      state.userInfo = action.payload.userInfo;
    },
    deleteUserInfo(state) {
      state.userInfo = initialState.userInfo;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessionUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload.userInfo;
      })
      .addCase(fetchSessionUserInfo.rejected, (state, action) => {
        console.error("Error fetching session user info:", action.error);
      });
  },
});

export const { updateUserInfo, deleteUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
