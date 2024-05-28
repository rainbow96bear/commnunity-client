import { useContext } from "react";
import { AuthContext } from "src/components/AuthContext/AuthContext";
import { AuthContextType } from "src/types/AuthContext";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
