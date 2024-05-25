import { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Category, CategoryBar, Item, SelectedItem } from "./Board.style";
import { boardRootRouter } from "src/constant/Category";
import { Moveto } from "shared/dist/CustomHooks/Moveto";
import { FrontsPosts } from "src/constant/DummyPostList";
import Post from "src/components/Post/Post";
import PostList from "src/components/PostList/PostList";

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
        {/* fix : 더미데이터 전달 수정 필요 */}
      </CategoryBar>
      <PostList posts={FrontsPosts}></PostList>
    </Box>
  );
};

export default Board;
