export interface Post {
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
