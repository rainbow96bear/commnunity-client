import { useEffect, useState } from "react";
import { Box, Category } from "./Search.style";
import Post from "src/components/Post/Post";
import PostList from "src/components/PostList/PostList";
import { useSearchParams } from "react-router-dom";
import { PostType } from "src/types";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState<PostType | null>(null);
  const [postid, setPostId] = useState("");

  const searchWord = searchParams.get("search");
  const pageNumber = searchParams.get("p");
  useEffect(() => {
    // fix : axios로 searchWord를 보내어 해당 값을 받아와 posts에 담는다
  }, [searchWord, pageNumber]);
  useEffect(() => {
    // fix : axios로 postid에 해당하는 내용을 받아와서 출력
  }, [postid]);
  return (
    <Box>
      {post != null && <Post post={post}></Post>}
      <Category>{searchWord + "'s"}</Category>
      <PostList posts={posts}></PostList>
    </Box>
  );
};

export default Search;
