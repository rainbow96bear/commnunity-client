import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { useDeleteUserInfo } from "src/hooks/useUserInfoReducer";
import { Box, FuncBox, LogButton, ProfileImg, Title } from "./Header.style";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const deleteUserInfo = useDeleteUserInfo();
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);
  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    deleteUserInfo();
    navigate("/");
  };
  return (
    <Box>
      <Title onClickCapture={() => navigate("/")}>
        <img src={logo} alt="logo" />
        <div className="text">IT's 놀이터</div>
      </Title>
      {userInfo.id !== "" ? (
        <FuncBox>
          <ProfileImg onClick={() => navigate(`/profile/${userInfo.id}`)}>
            <img src={userInfo.profile_image!} alt="profile" />
          </ProfileImg>
          <LogButton onClick={handleLogout}> 로그아웃 </LogButton>
        </FuncBox>
      ) : (
        <LogButton onClick={handleLogin}> 로그인 </LogButton>
      )}
    </Box>
  );
};

export default Header;
