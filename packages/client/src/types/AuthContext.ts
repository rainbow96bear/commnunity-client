import { UserInfo } from "./UserInfo";

export interface AuthContextType {
  userInfo: UserInfo | null;
  login: (userInfo: UserInfo) => void;
  logout: () => void;
}
