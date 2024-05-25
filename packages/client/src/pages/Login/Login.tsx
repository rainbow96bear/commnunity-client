import { Box, LoginButtonBox, LoginButton, Title } from "./Login.style";

const Login = () => {
  // fix : OAuth 로그인 로직 추가 필요
  return (
    <Box>
      <Title>Login</Title>
      <LoginButtonBox>
        <LoginButton>카카오</LoginButton>
      </LoginButtonBox>
    </Box>
  );
};
export default Login;
