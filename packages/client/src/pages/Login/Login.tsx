import axios from "axios";
import { Box, LoginButtonBox, LoginButton, Title } from "./Login.style";

const Login = () => {
  const handleLogin = async (platform: string) => {
    let oAuthURL = "";
    switch (platform) {
      case "kakao":
        oAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_RESTFUL_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
    }
    try {
      if (oAuthURL == "") {
        alert("지원하지 않는 로그인 방식입니다.");
      } else {
        window.location.href = oAuthURL;
      }
    } catch (error) {
      console.error("Error during Kakao login:", error);
    }
  };

  return (
    <Box>
      <Title>Login</Title>
      <LoginButtonBox>
        <LoginButton onClick={() => handleLogin("kakao")}>카카오</LoginButton>
      </LoginButtonBox>
    </Box>
  );
};
export default Login;
