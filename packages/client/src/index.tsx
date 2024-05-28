import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./components/AuthContext/AuthContext";
import LoginCallback from "./pages/Login/LoginCallback";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/login/oauth/kakao/callback"
            element={<LoginCallback />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
