import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Category,
  CategoryBar,
  Item,
  SelectedItem,
  ListHeader,
  Number,
  Title,
  Writer,
  ListItem,
} from "./Board.style";
import { boardRootRouter } from "src/constant/Category";
import { Moveto } from "shared/dist/CustomHooks/Moveto";
import { FrontsPosts } from "src/constant/DummyPostList";
import Post from "src/components/Post/Post";

const Board = () => {
  const { category, skill, id } = useParams<{
    category: string;
    skill?: string;
    id?: string;
  }>();
  const [router, setRouter] = useState(boardRootRouter + "/" + category + "/");
  const skills = ["React", "Vue", "Angular"];
  return (
    <Box>
      {/* fix : id 값으로 확인하는 것이 아닌 DB에서 받은 값이 있는가로 수정 필요 */}
      {id != undefined && <Post post={FrontsPosts[0]}></Post>}
      <Category>{category + "'s"}</Category>
      <CategoryBar>
        {[undefined, ...skills].map((skillName, idx) =>
          skill === skillName ? (
            <SelectedItem
              key={idx}
              onClick={Moveto(skillName ? router + skillName : router)}>
              {skillName || "전체"}
            </SelectedItem>
          ) : (
            <Item
              key={idx}
              onClick={Moveto(skillName ? router + skillName : router)}>
              {skillName || "전체"}
            </Item>
          )
        )}
      </CategoryBar>
      <ListHeader>
        <Number>No.</Number>
        <Title>제목</Title>
        <Writer>글쓴이</Writer>
      </ListHeader>
      {FrontsPosts.map((post, idx) => (
        <ListItem key={idx}>
          <Number>{post.id}</Number>
          <Title
            onClick={Moveto(
              boardRootRouter +
                "/" +
                post.category +
                "/" +
                post.subCategory +
                "/" +
                post.id
            )}>
            {post.title}
          </Title>
          <Writer>{post.writer}</Writer>
        </ListItem>
      ))}
    </Box>
  );
};

export default Board;
