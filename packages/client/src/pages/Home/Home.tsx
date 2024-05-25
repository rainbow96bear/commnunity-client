import PreviewList from "src/components/PostList/PreviewList";
import { Box } from "./Home.style";
import { BacksPosts, FrontsPosts } from "src/constant/DummyPostList";
const Home = () => {
  // fix : axios로 category에 따른 최신글 5~10개 받아와서 map으로 돌리기
  return (
    <Box>
      <PreviewList category={"Front"} posts={FrontsPosts}></PreviewList>
      <PreviewList category={"Back"} posts={BacksPosts}></PreviewList>
      <PreviewList category={"DevOps"} posts={BacksPosts}></PreviewList>
      <PreviewList category={"Blockchain"} posts={FrontsPosts}></PreviewList>
    </Box>
  );
};

export default Home;
