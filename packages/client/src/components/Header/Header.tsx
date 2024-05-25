import { Moveto } from "shared/dist/CustomHooks/Moveto";
import logo from "../../assets/logo.png";
import { Box, LoginButton, Title } from "./Header.style";

const Header = () => {
  // fix : 로그인 전 후에 따른 component render 작업 필요
  return (
    <Box>
      <Title onClickCapture={Moveto("/")}>
        <img src={logo} alt="logo" />
        <div className="text">IT's 놀이터</div>
      </Title>
      <LoginButton onClick={Moveto("/login")}> 로그인 </LoginButton>
    </Box>
  );
};

export default Header;
