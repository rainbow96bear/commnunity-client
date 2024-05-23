import styled from "styled-components";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Box>
      <Logo src={logo} alt="logo" />
      <button> 로그인 </button>
    </Box>
  );
};

export default Header;

const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 75px;
`;

const Logo = styled.img``;
