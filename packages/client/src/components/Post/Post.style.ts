import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 15px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

export const Info = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  & > div:first-child {
    display: flex;
    justify-content: left;
    cursor: pointer;
    color: blue;
    width: 15%;
  }
  &>div: nth-child(2) {
    width: 70%;
  }
  &>div: last-child {
    display: flex;
    justify-content: right;
    width: 15%;
  }
`;
export const ContentBox = styled.div`
  padding: 40px 0px;
  text-align: left;
`;
export const FuctionBar = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;
