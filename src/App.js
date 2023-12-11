import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login Page/LoginPage.jsx";
import RegistrationPage from "./Pages/Registration Page/RegistrationPage.jsx";
import GetData from "./components/GetData.jsx";
import Home from "./components/Home/Home.jsx";
import NotFound from "./Pages/Not Found Page/not-found.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="registration" element={<RegistrationPage />} />
      <Route path="test" element={<GetData />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
