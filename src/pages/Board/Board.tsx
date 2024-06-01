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
import PostList from "src/components/PostList/PostList";
import { RootState } from "src/store";
import Post from "src/components/Post/Post";
import PostButton from "src/components/Buttons/PostButton";
import { useGetPost, useGetPostList } from "src/hooks/usePost";
import { PostType, PostsByCategory } from "src/types";
import { postRoute } from "src/constant";
import { useQuery } from "src/hooks/useQuery";

const Board = () => {
  const getPost = useGetPost();
  const getPostList = useGetPostList();

  const { category, subcategory, postId } = useParams<{
    category: string;
    subcategory?: string;
    postId?: string;
  }>();
  const navigate = useNavigate();
  const [subcategories, setSubcategories] = useState<string[]>([]);
  const [post, setPost] = useState<PostType | null>(null);
  const [postList, setPostList] = useState<PostsByCategory>({});
  const query = useQuery();
  const page = query.get("p");

  const router = `${postRoute}/${category}`;

  const categories = useSelector(
    (state: RootState) => state.category.categories
  );

  useEffect(() => {
    const selectedCategory = categories.find(
      (cat) => cat.category === category
    );
    if (selectedCategory) {
      setSubcategories(
        selectedCategory.subcategories.map((sub) => sub.subcategory)
      );
    }
  }, [category, categories]);

  useEffect(() => {
    const fetchPosts = async () => {
      const list = await getPostList(category, subcategory);
      if (list) {
        setPostList(list);
      }
    };
    fetchPosts();
  }, [category, subcategory]);

  useEffect(() => {
    const fetchPost = async () => {
      if (category && subcategory && postId) {
        const post = await getPost(category, subcategory, postId);
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
        {[undefined, ...subcategories].map((subcategoryName, idx) =>
          subcategory == subcategoryName ? (
            <SelectedItem
              key={idx}
              onClick={() =>
                navigate(
                  subcategoryName ? `${router}/${subcategoryName}` : `${router}`
                )
              }>
              {subcategoryName || "전체"}
            </SelectedItem>
          ) : (
            <Item
              key={idx}
              onClick={() =>
                navigate(
                  subcategoryName ? `${router}/${subcategoryName}` : `${router}`
                )
              }>
              {subcategoryName || "전체"}
            </Item>
          )
        )}
      </CategoryBar>
      {Object.keys(postList).map((category) => (
        <PostList key={category} posts={postList[category]}></PostList>
      ))}
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
