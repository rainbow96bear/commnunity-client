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

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <LeftSideBar>
          <></>
        </LeftSideBar>
        <Main>
          <CategoryBox>
            <CategoryBar></CategoryBar>
          </CategoryBox>
          <MainBox>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/board/:category/:skill?/:id?/*"
                element={<Board></Board>}
              />
            </Routes>
          </MainBox>
        </Main>

        <RightSideBar>
          <></>
        </RightSideBar>
      </Body>
      <Footer></Footer>
    </div>
  );
}

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
  padding: 0px 20px;
`;
