// profile
export interface ProfileType {
  id: string;
  nickname: string;
  profile_image?: string;
  wallet?: string;
}

// post
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

export interface PostDTO {
  category: string;
  subcategory: string;
  title: string;
  content: string;
}

export interface PostIdResponse {
  success: boolean;
  postId: string;
}
