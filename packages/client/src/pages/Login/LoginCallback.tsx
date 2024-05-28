import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "src/components/AuthContext/AuthContext";

const LoginCallback = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const fetchLogin = useCallback(
    async (code: string) => {
      try {
        const param = {
          code,
        };
        const response = await axios.post(
          "http://localhost:8000/api/v1/auth/kakao/userinfo",
          param,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // fix : login에 token 전달?
        login("a");
        console.log(response.data);
        const from = localStorage.getItem("from") || "/";
        localStorage.removeItem("from");
        navigate(from, { replace: true });
      } catch (error) {
        alert("Function fetchLogin error!");
        console.error(error);
      }
    },
    [navigate]
  );

  useEffect(() => {
    if (code) {
      fetchLogin(code);
    }
  }, [code, fetchLogin]);

  useEffect(() => {
    const Address = new URL(window.location.href);
    const code = Address.searchParams.get("code") || "";

    setCode(code);
  }, []);

  return <div>로딩중</div>;
};

export default LoginCallback;
