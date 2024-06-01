// url
export const DiscordURL = `https://discord.gg/qTxbxfAD`;
export const API_version = `/api/v1`;

// color
export const color_3db = `#36d7b7`;

// router
export const boardRoot = `/board`;
export const posts = `${boardRoot}/posts/:category/:skill?`;
export const postsSkill = `${boardRoot}/posts/:category/:skil/:postId`;
export const newPost = `${boardRoot}/newpost`;
export const editPost = `${boardRoot}/editpost/:postId`;

export const profile = `profile/:userId`;

export const search = `/search`;

// type
export interface PostType {
  id: string;
  category: string;
  subcategory: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  userId: string;
  user?: {
    nickname: string;
  };
}
