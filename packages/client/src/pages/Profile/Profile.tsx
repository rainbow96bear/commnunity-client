import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  ProfileImage,
  Nickname,
  WalletAddress,
  EditButton,
  SaveButton,
} from "./Profile.style";
import { RootState } from "src/store";

const Profile = () => {
  // useSelector를 사용하여 userInfo 상태 가져오기
  const userProfile = useSelector((state: RootState) => state.userInfo);

  // 프로필 정보 상태 관리
  const [profile, setProfile] = useState(userProfile);

  // 수정 모드 관리
  const [isEditMode, setIsEditMode] = useState(false);

  // 수정된 프로필 정보를 저장하는 함수
  const handleSave = () => {
    // 저장 로직 구현
    alert("프로필이 성공적으로 저장되었습니다!");
    setIsEditMode(false);
  };

  // 프로필 정보가 변경되면 useState 업데이트
  React.useEffect(() => {
    setProfile(userProfile);
  }, [userProfile]);

  return (
    <Box>
      <ProfileImage src={profile.profile_image} alt="프로필 이미지" />
      <Nickname>{profile.nickname}</Nickname>
      <WalletAddress>{profile.wallet}</WalletAddress>
      {isEditMode ? (
        <SaveButton onClick={handleSave}>저장</SaveButton>
      ) : (
        <EditButton onClick={() => setIsEditMode(true)}>수정</EditButton>
      )}
    </Box>
  );
};

export default Profile;
