import { useState, useEffect, ChangeEvent } from "react";
import { useSelector } from "react-redux";
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
  ProfileImagePreview,
  EditBox,
  ItemBoxUnderLine,
  NicknameInput,
  WalletInput,
  EmptyWalletAddress,
} from "./Profile.style";
import { RootState } from "src/store";
import { useGetProfile, useUpdateProfile } from "src/hooks/useProfile";
import { useUpdateUserInfo } from "src/hooks/useUserInfoReducer";
import { ProfileType } from "src/types";

const Profile = () => {
  const { userId } = useParams();
  const LoginUserInfo = useSelector(
    (state: RootState) => state.userInfo.userInfo
  );
  const [isEditMode, setIsEditMode] = useState(false);

  const [userInfo, setUserInfo] = useState<ProfileType | null>(null);

  const [editedProfileImg, setEditedProfileImg] = useState<File | null>(null);
  const [editedNickname, setEditedNickname] = useState<string>("");
  const [editedWallet, setEditedWallet] = useState<string>("");

  const getProfile = useGetProfile();
  const updateProfile = useUpdateProfile();
  const updateUserInfo = useUpdateUserInfo();

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userId) {
        const profile = await getProfile(userId);
        if (profile) {
          setUserInfo(profile);
          setEditedNickname(profile.nickname);
          setEditedWallet(profile.wallet || "");
        }
      }
    };
    fetchUserInfo();
  }, [userId]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setEditedProfileImg(file);
    }
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    if (newNickname.length <= 10) {
      setEditedNickname(newNickname);
    }
  };

  const handleWalletChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newWallet = e.target.value;
    if (newWallet.length <= 42) {
      setEditedWallet(newWallet);
    }
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

    formData.append("nickname", editedNickname);
    formData.append("wallet", editedWallet);
    formData.append("userId", userId!);

    if (userId) {
      const profile = await updateProfile(userId, formData);
      if (profile) {
        updateUserInfo(profile);
        setUserInfo(profile);
        alert("프로필이 성공적으로 저장되었습니다!");
        setIsEditMode(false);
      }
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
            {userInfo?.wallet ? (
              <WalletAddress>{userInfo?.wallet}</WalletAddress>
            ) : (
              <EmptyWalletAddress>
                wallet 주소를 추가해주세요
              </EmptyWalletAddress>
            )}
          </ItemBoxUnderLine>
        </>
      )}
      {LoginUserInfo.id == userInfo?.id && (
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
      )}
    </Box>
  );
};

export default Profile;
