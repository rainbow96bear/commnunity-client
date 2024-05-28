import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa; /* 배경색 */
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  font-family: "Nanum Gothic", sans-serif; /* 한글 폰트 적용 */
  color: #333; /* 글자색 */
`;

export const Subtitle = styled.h2`
  font-size: 6rem;
  margin: 0;
  font-family: "Nanum Gothic", sans-serif; /* 한글 폰트 적용 */
  color: #666; /* 글자색 */
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
  font-family: "Nanum Gothic", sans-serif; /* 한글 폰트 적용 */
  color: #666; /* 글자색 */
`;

export const HomeButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #ffc107; /* 버튼 배경색 */
  color: #333; /* 버튼 글자색 */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ffca28; /* 호버 시 버튼 배경색 */
  }
  font-family: "Nanum Gothic", sans-serif; /* 한글 폰트 적용 */
`;
