import axios from "axios";
import { API_version } from "src/constant";
import { PostDTO, PostIdResponse, PostType, PostsByCategory } from "src/types";

const useDeletePost = () => {
  const deletePost: (
    postId: string,
    userId: string
  ) => Promise<boolean> = async (postId: string, userId: string) => {
    const response = (
      await axios.post(
        `${API_version}/posts/${postId}`,
        {
          userId: userId,
        },
        {
          withCredentials: true,
        }
      )
    ).data;
    return response.sucess;
  };
  return deletePost;
};

const useGetPost = () => {
  const getPost: (
    category: string,
    subcategory: string,
    postId: string
  ) => Promise<PostType | null> = async (
    category: string,
    subcategory: string,
    postId: string
  ) => {
    try {
      const response = (
        await axios.get(
          `${API_version}/posts/${category}/${subcategory}/${postId}`,
          {
            withCredentials: true,
          }
        )
      ).data;
      return response.post;
    } catch (error) {
      return null;
    }
  };
  return getPost;
};

const useGetPostList = () => {
  const getPostList: (
    category?: string,
    subcategory?: string,
    page?: string
  ) => Promise<PostsByCategory | null> = async (
    category?: string,
    subcategory?: string,
    page?: string
  ) => {
    let requestURL = `${API_version}/posts`;
    if (category) {
      requestURL += `/${category}`;
    }
    if (subcategory) {
      requestURL += `/${subcategory}`;
    }
    if (page) {
      requestURL += `/?p=${page}`;
    }
    try {
      const response = (
        await axios.get(`${requestURL}`, {
          withCredentials: true,
        })
      ).data;
      return response.postList;
    } catch (error) {
      return null;
    }
  };
  return getPostList;
};

const useUpdatePost = () => {
  const updatePost: (
    userId: string,
    postId: string,
    post: PostDTO
  ) => Promise<PostIdResponse> = async (
    userId: string,
    postId: string,
    post: PostDTO
  ) => {
    try {
      const response = (
        await axios.put(
          `${API_version}/posts/${postId}`,
          { userId: userId, post: post },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      ).data;
      const { success } = response;
      if (success) {
        return { success, postId };
      }
      return { success, postId };
    } catch (error) {
      return { success: false, postId: "" };
    }
  };
  return updatePost;
};

const useUploadPost = () => {
  const uploadPost: (
    userId: string,
    post: PostDTO
  ) => Promise<PostIdResponse> = async (userId: string, post: PostDTO) => {
    try {
      const response = (
        await axios.post(
          `${API_version}/posts`,
          { userId: userId, post: post },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      ).data;
      const { success, postId } = response;
      if (success) {
        return { success, postId };
      }
      return { success, postId: "" };
    } catch (error) {
      return { success: false, postId: "" };
    }
  };
  return uploadPost;
};
export {
  useDeletePost,
  useUpdatePost,
  useGetPost,
  useGetPostList,
  useUploadPost,
};
