import { useDispatch, useSelector } from "react-redux";
import { Box, FuncBox, LogButton, ProfileImg, Title } from "./Header.style";
import logo from "../../assets/logo.png";
import { useAuth } from "src/hooks/useAuth";
import { AppDispatch, RootState } from "src/store";
import { deleteUserInfo } from "src/store/slices/userInfo"; // 수정된 부분
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    dispatch(deleteUserInfo());
    logout();
    navigate("/");
  };

  return (
    <Box>
      <Title onClickCapture={() => navigate("/")}>
        <img src={logo} alt="logo" />
        <div className="text">IT's 놀이터</div>
      </Title>
      {userInfo ? (
        <FuncBox>
          <ProfileImg onClick={() => navigate(`/profile/${userInfo.id}`)}>
            <img src={userInfo.profile_image!}></img>
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
