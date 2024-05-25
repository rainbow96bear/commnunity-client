import PreviewList from "src/components/PostList/PreviewList";
import { Box } from "./Home.style";
import { BacksPosts, FrontsPosts } from "src/constant/DummyPostList";
const Home = () => {
  return (
    <Box>
      <PreviewList posts={FrontsPosts}></PreviewList>
      <PreviewList posts={BacksPosts}></PreviewList>
      <PreviewList posts={FrontsPosts}></PreviewList>
      <PreviewList posts={BacksPosts}></PreviewList>
      <PreviewList posts={FrontsPosts}></PreviewList>
      <PreviewList posts={BacksPosts}></PreviewList>
      <PreviewList posts={FrontsPosts}></PreviewList>
      <PreviewList posts={BacksPosts}></PreviewList>
    </Box>
  );
};

export default Home;
