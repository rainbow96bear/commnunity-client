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
  ProfileImagePreview,
  EditBox,
  ItemBoxUnderLine,
  NicknameInput,
  WalletInput,
} from "./Profile.style";
import { AppDispatch, RootState } from "src/store";
import { updateUserInfo } from "src/store/slices/userInfo";
import axios from "axios";
import { UserInfo } from "src/types/UserInfo";

const Profile = () => {
  const { id } = useParams();
  const LoginUserInfo = useSelector(
    (state: RootState) => state.userInfo.userInfo
  );
  const dispatch = useDispatch<AppDispatch>();
  const [isEditMode, setIsEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [editedProfileImg, setEditedProfileImg] = useState<File | null>(null);
  const [editedNickname, setEditedNickname] = useState<string>("");
  const [editedWallet, setEditedWallet] = useState<string>("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = (
        await axios.get(
          process.env.REACT_APP_API_VERSION + `/userinfos/${id}`,
          {
            withCredentials: true,
          }
        )
      ).data;
      const resUserInfo = response.userInfo;
      setUserInfo(resUserInfo);
      setEditedNickname(resUserInfo.nickname);
      setEditedWallet(resUserInfo.wallet);
    };
    fetchUserInfo();
  }, [dispatch, id]);

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
    if (!editedWallet) {
      alert("지갑 주소를 입력해주세요.");
      return;
    }
    const formData = new FormData();

    if (editedProfileImg) {
      formData.append("profile_image", editedProfileImg);
    }

    formData.append("nickname", editedNickname);
    formData.append("wallet", editedWallet);
    formData.append("id", id!);

    try {
      const result = (
        await axios.put(
          process.env.REACT_APP_API_VERSION + `/userinfos/${id}`,
          formData,
          {
            withCredentials: true,
          }
        )
      ).data;
      dispatch(updateUserInfo(result.userInfo));
      setUserInfo(result.userInfo);
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
      {/* fix : id 값과 로그인 된 id 가 같으면 아래 내용을 띄운다 */}
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
