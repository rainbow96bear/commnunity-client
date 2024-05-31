import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LeftSideBar from "./components/SideBar/LeftSideBar";
import RightSideBar from "./components/SideBar/RightSideBar";
import Body from "./components/Body/Body";
import "./App.css";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import Home from "./pages/Home/Home";
import Board from "./pages/Board/Board";
import PrivateRoutes from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import WritePost from "./pages/WritePost/WritePost";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);
  useEffect(() => {
    // console.log(userInfo);
  }, [userInfo]);
  return (
    <div className="App">
      <Header />
      <Body>
        <LeftSideBar>
          <></>
        </LeftSideBar>
        <Main>
          <CategoryBox>
            <CategoryBar />
          </CategoryBox>
          <MainBox>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/board/posts" element={<NotFound />} />
              <Route
                path="/board/posts/:category/:skill?"
                element={<Board />}
              />
              <Route element={<PrivateRoutes />}>
                <Route
                  path="/board/posts/:category/:skill/:id"
                  element={<Board />}
                />
                <Route path="/board/newpost" element={<WritePost />} />
                <Route path="/board/editpost/:postId" element={<WritePost />} />
                <Route path="/profile/:id" element={<Profile />} />
              </Route>
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainBox>
        </Main>
        <RightSideBar>
          <></>
        </RightSideBar>
      </Body>
      <Footer />
    </div>
  );
};

export default App;

const Main = styled.div`
  min-width: 70%;
  max-width: 100%;
  display: flex;
`;

const CategoryBox = styled.div`
  width: 140px;
`;

const MainBox = styled.div`
  width: 100%;
  margin: 0px 20px;
`;
