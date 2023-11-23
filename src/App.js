import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login Page/LoginPage.jsx";

export default function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}
