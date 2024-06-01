import React from "react";
import {
  Box,
  Title,
  Subtitle,
  Description,
  HomeButton,
} from "./NotFound.style";

const NotFound = () => {
  return (
    <Box>
      <Title>페이지를 찾을 수 없어요</Title>
      <Subtitle>404</Subtitle>
      <Description>
        죄송합니다. 찾으시는 페이지가 존재하지 않습니다.
      </Description>
      <HomeButton onClick={() => (window.location.href = "/")}>
        홈으로 이동
      </HomeButton>
    </Box>
  );
};

export default NotFound;
