import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "src/components/Loading/Loading";
import { useAuth } from "src/hooks/useAuth";

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
          "/api/v1/auth/kakao/userinfo",
          param,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        login(response.data.userInfo);

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

  return (
    <>
      <Loading></Loading>
    </>
  );
};

export default LoginCallback;
