import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Box,
  Category,
  CategoryBar,
  FuncBar,
  Item,
  SelectedItem,
} from "./Board.style";
import { boardRootRouter } from "src/constant/Category";
import PostList from "src/components/PostList/PostList";
import { RootState } from "src/store";
import Post from "src/components/Post/Post";
import PostButton from "src/components/Buttons/PostButton";
import { useGetPost } from "src/hooks/usePost";
import { PostType } from "src/constant";

const Board = () => {
  const getPost = useGetPost();
  const { category, skill, postId } = useParams<{
    category: string;
    skill?: string;
    postId?: string;
  }>();
  const navigate = useNavigate();
  const router = boardRootRouter + "/" + category + "/";
  const [skills, setSkills] = useState<string[]>([]);
  const [post, setPost] = useState<PostType | null>(null);

  const categories = useSelector(
    (state: RootState) => state.category.categories
  );

  useEffect(() => {
    const selectedCategory = categories.find(
      (cat) => cat.category === category
    );
    if (selectedCategory) {
      setSkills(selectedCategory.subcategories.map((sub) => sub.subcategory));
    }
  }, [category, categories]);

  useEffect(() => {
    const fetchPost = async () => {
      if (postId) {
        const post = await getPost(postId);
        setPost(post);
      }
    };
    fetchPost();
  }, [postId]);

  return (
    <Box>
      {postId !== undefined && post && <Post post={post} />}
      <Category>{category + "'s"}</Category>
      <CategoryBar>
        {[undefined, ...skills].map((skillName, idx) =>
          skill === skillName ? (
            <SelectedItem
              key={idx}
              onClick={() => navigate(skillName ? router + skillName : router)}>
              {skillName || "전체"}
            </SelectedItem>
          ) : (
            <Item
              key={idx}
              onClick={() => navigate(skillName ? router + skillName : router)}>
              {skillName || "전체"}
            </Item>
          )
        )}
      </CategoryBar>
      {/* fix : DB에서 post불러와서 전달하기 */}
      {/* <PostList posts={FrontsPosts} /> */}
      <FuncBar>
        <PostButton
          text={"글쓰기"}
          onClick={() => navigate("/board/newpost")}
        />
      </FuncBar>
    </Box>
  );
};

export default Board;
