import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Layout />
      {/* <Footer /> */}
    </div>
  );
}
