import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./NavBar/NavBar";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Footer from "./Footer/Footer";
import Monoposto from "./MonopostoSection/Monoposto";
import Results from "./Results/Results";
import Tecnologia from "./Tecnologia/Tecnologia";
import F1LapTimeGame from "./Test/F1LapTimeGame";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/monoposto" element={<Monoposto />} />
          <Route path="/risultati" element={<Results />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/test" element={<F1LapTimeGame />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
