import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Box,
  Category,
  CategoryBar,
  FuncBar,
  Item,
  SelectedItem,
} from "./Board.style";
import { boardRootRouter } from "src/constant/Category";
import { FrontsPosts } from "src/constant/DummyPostList";
import PostList from "src/components/PostList/PostList";
import { RootState } from "src/store";
import Post from "src/components/Post/Post";
import { Post as PostType } from "src/types/Post";
import PostButton from "src/components/Buttons/PostButton";

const Board = () => {
  const { category, skill, id } = useParams<{
    category: string;
    skill?: string;
    id?: string;
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
      try {
        const response = (
          await axios.get(`${process.env.REACT_APP_API_VERSION}/posts/${id}`, {
            withCredentials: true,
          })
        ).data;
        setPost(response);
      } catch (error) {
        console.error("Error fetching post:", error);
        setPost(null);
      }
    };
    if (id !== undefined) {
      fetchPost();
    }
  }, [id]);

  return (
    <Box>
      {id !== undefined && post && <Post post={post} />}
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
      <PostList posts={FrontsPosts} />
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
