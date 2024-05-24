import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LeftSideBar from "./components/SideBar/LeftSideBar";
import RightSideBar from "./components/SideBar/RightSideBar";
import Body from "./components/Body/Body";
import "./App.css";
import CategoryBar from "./components/CategoryBar/CategoryBar";

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <LeftSideBar>
          <></>
        </LeftSideBar>
        <Main>
          <CategoryBar></CategoryBar>
          <Routes>
            {/* <Route path="/*" element={<User />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/admin/*" element={<AdminMain />} /> */}
          </Routes>
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
  min-width: 80%;
  max-width: 100%;
`;
