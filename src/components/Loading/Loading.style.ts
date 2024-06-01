import styled from "styled-components";

export const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(211, 211, 211, 0.5); // 반투명 배경
  color: white;
  font-size: 2rem;
  z-index: 1000; // 다른 요소 위에 표시
`;
