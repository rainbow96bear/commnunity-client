import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "src/components/Loading/Loading";
import { AppDispatch } from "src/store";
import { updateUserInfo } from "src/store/slices/userInfo";

const LoginCallback = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const fetchLogin = useCallback(
    async (code: string) => {
      try {
        const param = {
          code,
        };
        const response = (
          await axios.post(
            process.env.REACT_APP_API_VERSION + "/auth/kakao/userinfo",
            param,
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
        ).data;
        dispatch(updateUserInfo(response.userInfo));
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
