import styled from "styled-components";

export const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 75px;
  border-bottom: 3px solid black;
`;

export const Title = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  .text {
    font-size: 1.5rem;
  }
  img {
    height: 100%;
  }
`;
