import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login Page/LoginPage.jsx";
import RegistrationPage from "./components/Registration Page/RegistrationPage.jsx";
import GetData from "./components/GetData.jsx";


export default function App() {

  return (
    <div className="wrapper">

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="test" element={<GetData />} />
        <Route path="*" element={<h1>not-found</h1>} />
      </Routes>
    </div>
  );
}
