import styled from "styled-components";

export const Box = styled.div`
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
  cursor: pointer;
  .text {
    font-size: 1.5rem;
    font-weight: bold;
  }
  img {
    height: 100%;
  }
`;

export const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 1000;
  cursor: pointer;
  border: 2px solid lightblue;
  border-radius: 10px;
  padding: 5px 10px;

  &: hover {
    background: lightblue;
  }
`;
