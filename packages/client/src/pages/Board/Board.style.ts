import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Category = styled.div`
  text-align: left;
  border-bottom: 2px solid black;
  padding: 10px 0px 10px 5px;
  font-size: 2rem;
  font-weight: bold;
`;

export const CategoryBar = styled.div`
  border-bottom: 1px solid gray;
  padding: 10px 5px;
`;

const commonItemStyles = `
  padding: 5px 15px;
  border-radius: 50px;
  cursor: pointer;
`;

export const Item = styled.div`
  color: gray;
  ${commonItemStyles}
`;

export const SelectedItem = styled(Item)`
  background: lightblue;
  font-weight: bold;
  color: black;
`;
