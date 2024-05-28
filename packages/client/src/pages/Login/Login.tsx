import { useEffect } from "react";
import { Box, LoginButtonBox, LoginButton, Title } from "./Login.style";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const from = (location.state as { from: Location })?.from?.pathname || "/";

  const handleLogin = async (platform: string) => {
    let oAuthURL = "";
    switch (platform) {
      case "kakao":
        oAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_RESTFUL_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
        break;
      default:
        alert("지원하지 않는 로그인 방식입니다.");
        return;
    }

    try {
      localStorage.setItem("from", from);

      window.location.href = oAuthURL;
    } catch (error) {
      console.error("Error during Kakao login:", error);
    }
  };

  useEffect(() => {
    const handleBack = () => {
      window.history.go(-2);
    };

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, []);

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
