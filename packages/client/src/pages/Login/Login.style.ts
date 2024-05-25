import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 800;
  padding: 50px;
`;
export const LoginButtonBox = styled.div`
  width: 30%;
  min-height: 500px;
`;
export const LoginButton = styled.div`
  text-align: center;
  border: 2px solid lightblue;
  border-radius: 50px;
  padding: 10px;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  &: hover {
    background: lightblue;
  }
`;
