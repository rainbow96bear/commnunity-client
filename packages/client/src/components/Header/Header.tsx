import logo from "../../assets/logo.png";
import { Box, Title } from "./Header.style";

const Header = () => {
  return (
    <Box>
      <Title>
        <img src={logo} alt="logo" />
        <div className="text">IT's 놀이터</div>
      </Title>
      <button> 로그인 </button>
    </Box>
  );
};

export default Header;
