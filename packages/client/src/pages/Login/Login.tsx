import { useEffect } from "react";
import { Box, LoginButtonBox, LoginButton, Title } from "./Login.style";
import { useGetOAuthURL } from "src/hooks/useOAuth";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const getOAuthURL = useGetOAuthURL();

  const handleLogin = async (platform: string) => {
    const OAuthURL = getOAuthURL(platform);
    if (OAuthURL) {
      const from =
        (location.state as { from: Location })?.from?.pathname || "/";
      localStorage.setItem("from", from);
      window.location.href = OAuthURL;
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
