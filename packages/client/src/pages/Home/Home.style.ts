import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
