import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { boardRootRouter } from "src/constant/Category";
import { Post as PostType } from "src/types/Post";
import { AppDispatch, RootState } from "src/store";
import ScrollUpButton from "shared/dist/Components/ScrollUpButton";
import { Box, Title, Info, ContentBox, FuctionBar } from "./Post.style";
import PostButton from "../Buttons/PostButton";
import { setEditPost } from "src/store/slices/post";
import axios from "axios";
import { useEffect, useState } from "react";

interface PostProps {
  post: PostType | null;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);
  const [isDelete, setIsDelete] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleEditClick = () => {
    if (post) {
      dispatch(setEditPost(post));
    }
    navigate(`/board/editpost/${post?.id}`);
  };

  const handleDeleteClick = async () => {
    try {
      const result = (
        await axios.delete(
          `${process.env.REACT_APP_API_VERSION}/posts/${post?.id}`,
          {
            data: {
              id: userInfo.id,
            },
            withCredentials: true,
          }
        )
      ).data;
      console.log(result);
      // window.location.href = "http://localhost:3000/NotFound";
      navigate(`/NotFound`);
      // console.log(result.data);
      // if (result.data.success) {
      // } else {
      //   console.error("Post deletion failed.");
      // }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <Box>
      <Title>{post?.title}</Title>
      <Info>
        <div
          onClick={() =>
            navigate(
              boardRootRouter + "/" + post?.category + "/" + post?.subcategory
            )
          }>
          [{post?.subcategory}]
        </div>
        <div>{post?.user?.nickname}</div>
        <div>{post?.createdAt?.slice(0, 10)}</div>
      </Info>
      <ContentBox>{post?.content}</ContentBox>
      <FuctionBar>
        <ScrollUpButton
          width={30}
          height={30}
          fontSize={30}
          color={"lightblue"}
        />
        <PostButton
          text={"글쓰기"}
          onClick={() => navigate("/board/newpost")}></PostButton>
        {post?.userId == userInfo.id && (
          <>
            <PostButton
              text={"수정"}
              onClick={() => handleEditClick()}></PostButton>
            <PostButton
              text={"삭제"}
              onClick={() => handleDeleteClick()}></PostButton>
          </>
        )}
      </FuctionBar>
    </Box>
  );
};

export default Post;
