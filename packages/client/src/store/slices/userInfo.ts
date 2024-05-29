import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { UserInfo } from "src/types/UserInfo";

// UserInfo 타입이 포함된 상태 타입 정의
interface UserState {
  userInfo: UserInfo;
}

// initialState 수정
const initialState: UserInfo = {
  platform: "",
  id: "",
  nickname: "",
  profile_image: "", // 기본 이미지로 수정
  wallet: "",
};

export const fetchSessionUserInfo = createAsyncThunk<UserInfo>(
  "userInfo/fetchSessionUserInfo",
  async () => {
    const response = await axios.get<UserState>("/api/v1/userinfo", {
      withCredentials: true,
    });
    return response.data.userInfo;
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    updateUserInfo(state, action: PayloadAction<UserState>) {
      state = action.payload.userInfo; // 수정된 부분
    },
    deleteUserInfo(state) {
      state = initialState; // 수정된 부분
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessionUserInfo.fulfilled, (state, action) => {
        state = action.payload; // 수정된 부분
      })
      .addCase(fetchSessionUserInfo.rejected, (state, action) => {
        console.error("Error fetching session user info:", action.error);
      });
  },
});

export const { updateUserInfo, deleteUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
