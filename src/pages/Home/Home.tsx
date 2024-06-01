import PreviewList from "src/components/PostList/PreviewList";
import { Box } from "./Home.style";
import { useGetPostList } from "src/hooks/usePost";
import { PostType, PostsByCategory } from "src/types";
import { useEffect, useState } from "react";

const Home = () => {
  const getPostList = useGetPostList();

  const [postList, setPostList] = useState<PostsByCategory>({});

  useEffect(() => {
    const fetchPosts = async () => {
      const list = await getPostList();
      if (list) {
        setPostList(list);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Box>
      {Object.keys(postList).map((category) => (
        <PreviewList
          key={category}
          category={category}
          posts={postList[category]}></PreviewList>
      ))}
    </Box>
  );
};

export default Home;
