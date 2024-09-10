import axios from "axios";
import { API_version } from "src/constant";
import { ProfileType } from "src/types";

const useGetOAuthURL = () => {
  const getOAuthURL = (platform: string) => {
    let OAuthURL = "";
    switch (platform) {
      case "kakao":
        OAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_RESTFUL_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
        break;
      default:
        alert("지원하지 않는 로그인 방식입니다.");
        return;
    }

    return OAuthURL;
  };
  return getOAuthURL;
};

const useFetchUserInfo = () => {
  const fetchUserInfo: (code: string) => Promise<ProfileType | null> = async (
    code: string
  ) => {
    try {
      const response = (
        await axios.post(
          `${API_version}/auth/kakao/userinfo`,
          { code },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      ).data;
      return response.userInfo;
    } catch (error) {
      return null;
    }
  };
  return fetchUserInfo;
};

export { useGetOAuthURL, useFetchUserInfo };
