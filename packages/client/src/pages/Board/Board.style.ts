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

const truncateText = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Number = styled.div`
  flex: 1;
  text-align: center;
  ${truncateText}
`;
export const Title = styled.div`
  flex: 7;
  cursor: pointer;
  ${truncateText}
`;

export const Writer = styled.div`
  flex: 2;
  ${truncateText}
`;

export const commonListItem = styled.div`
  padding: 5px 15px;
  border-radius: 50px;
  width: 100%;
  & > div {
    padding: 0px 10px;
  }
`;

export const ListItem = styled(commonListItem)`
  text-align: left;
`;

export const ListHeader = styled(commonListItem)`
  font-weight: bold;
`;
