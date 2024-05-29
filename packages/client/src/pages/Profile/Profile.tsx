import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Box,
  ProfileImage,
  Nickname,
  WalletLabel,
  WalletAddress,
  EditButton,
  SaveButton,
  CancleButton,
  ItemBox,
  TextInput,
  ProfileImagePreview,
  EditBox,
  ItemBoxUnderLine,
  NicknameInput,
  WalletInput,
} from "./Profile.style";
import { AppDispatch, RootState } from "src/store";
import {
  fetchSessionUserInfo,
  updateUserInfo,
} from "src/store/slices/userInfo";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedProfileImg, setEditedProfileImg] = useState<File | null>(null);
  const [editedNickname, setEditedNickname] = useState(userInfo.nickname);
  const [editedWallet, setEditedWallet] = useState(userInfo.wallet);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (id && !userInfo.id) {
        await dispatch(fetchSessionUserInfo(id));
      }
    };
    fetchUserInfo();
  }, [dispatch, id, userInfo.id]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setEditedProfileImg(file);
    }
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedNickname(e.target.value);
  };

  const handleWalletChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedWallet(e.target.value);
  };

  const handleSave = async () => {
    if (!editedNickname) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    const formData = new FormData();

    if (editedProfileImg) {
      formData.append("profile_image", editedProfileImg);
    }

    if (editedNickname != undefined) {
      formData.append("nickname", editedNickname);
    }
    if (editedWallet != undefined) {
      formData.append("wallet", editedWallet);
    }
    formData.append("id", id!);

    try {
      const result = await axios.patch(`/api/v1/userinfo`, formData, {
        withCredentials: true,
      });

      dispatch(updateUserInfo(result.data));
      alert("프로필이 성공적으로 저장되었습니다!");
      setIsEditMode(false);
    } catch (error) {
      console.error("프로필 저장에 실패했습니다:", error);
      alert("프로필 저장에 실패했습니다. 다시 시도해주세요.");
    }
  };
  return (
    <Box>
      {isEditMode ? (
        <>
          <ItemBox>
            <label htmlFor="profileImageInput">
              <ProfileImagePreview
                src={
                  editedProfileImg
                    ? URL.createObjectURL(editedProfileImg)
                    : userInfo?.profile_image
                }
                alt="프로필 이미지"
              />
              <input
                id="profileImageInput"
                type="file"
                accept="image/*"
                name="profile_image"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </label>
            <NicknameInput
              type="text"
              name="nickname"
              placeholder="닉네임을 입력해주세요"
              value={editedNickname}
              onChange={handleNicknameChange}
            />
          </ItemBox>
          <ItemBox>
            <WalletLabel>Wallet Address</WalletLabel>
            <WalletInput
              type="text"
              name="wallet"
              placeholder="wallet 주소를 입력해주세요"
              value={editedWallet}
              onChange={handleWalletChange}
            />
          </ItemBox>
        </>
      ) : (
        <>
          <ItemBoxUnderLine>
            <ProfileImage src={userInfo?.profile_image} alt="프로필 이미지" />
            <Nickname>{userInfo?.nickname}</Nickname>
          </ItemBoxUnderLine>
          <ItemBoxUnderLine>
            <WalletLabel>Wallet Address</WalletLabel>
            <WalletAddress>
              {userInfo?.wallet || "wallet 주소를 추가해주세요"}
            </WalletAddress>
          </ItemBoxUnderLine>
        </>
      )}

      <EditBox>
        {isEditMode ? (
          <>
            <CancleButton onClick={() => setIsEditMode(false)}>
              취소
            </CancleButton>
            <SaveButton onClick={handleSave}>저장</SaveButton>
          </>
        ) : (
          <EditButton onClick={() => setIsEditMode(true)}>수정</EditButton>
        )}
      </EditBox>
    </Box>
  );
};

export default Profile;
