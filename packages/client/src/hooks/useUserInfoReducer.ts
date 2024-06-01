import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store";
import { deleteUserInfo, updateUserInfo } from "src/store/slices/userInfo";
import { ProfileType } from "src/types";

const useDeleteUserInfo = () => {
  const dispatch = useDispatch<AppDispatch>();

  const deleteInfo = () => {
    dispatch(deleteUserInfo());
  };

  return deleteInfo;
};

const useUpdateUserInfo = () => {
  const dispatch = useDispatch<AppDispatch>();

  const updateInfo = (userInfo: ProfileType) => {
    dispatch(updateUserInfo(userInfo));
  };

  return updateInfo;
};

export { useDeleteUserInfo, useUpdateUserInfo };
