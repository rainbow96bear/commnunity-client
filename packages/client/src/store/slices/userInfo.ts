import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileType } from "src/types";

interface UserState {
  userInfo: ProfileType;
}

const storedUserInfo = localStorage.getItem("userInfo");

const initialState: UserState = storedUserInfo
  ? { userInfo: JSON.parse(storedUserInfo) }
  : {
      userInfo: {
        id: "",
        nickname: "",
        profile_image: process.env.REACT_APP_BASE_PROFILE_IMG || "",
        wallet: "",
      },
    };

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    updateUserInfo(state, action: PayloadAction<ProfileType>) {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    deleteUserInfo(state) {
      state.userInfo = initialState.userInfo;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { updateUserInfo, deleteUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
