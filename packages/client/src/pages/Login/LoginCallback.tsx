import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "src/components/Loading/Loading";
import { useFetchUserInfo } from "src/hooks/useOAuth";
import { useUpdateUserInfo } from "src/hooks/useUserInfoReducer";

const LoginCallback = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const updateUserInfo = useUpdateUserInfo();
  const fetchUserInfo = useFetchUserInfo();

  useEffect(() => {
    const fetchData = async () => {
      if (code) {
        const userInfo = await fetchUserInfo(code);
        if (userInfo != null) {
          updateUserInfo(userInfo);
          const from = localStorage.getItem("from") || "/";
          localStorage.removeItem("from");
          navigate(from, { replace: true });
        }
      }
    };

    fetchData();
  }, [code]);

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
