import React, { ReactNode, createContext, useEffect, useState } from "react";
import { AuthContextType } from "src/types/AuthContext";
import { UserInfo } from "src/types/UserInfo";

interface AuthContextProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      return JSON.parse(storedUserInfo) as UserInfo;
    } else {
      return null;
    }
  });

  const login = (userInfo: UserInfo) => {
    setUserInfo(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  const logout = () => {
    setUserInfo(null);
    localStorage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider value={{ userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
