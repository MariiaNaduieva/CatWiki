import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import BreedDetail from "./pages/BreedDetail";
import logo from "./images/CatwikiLogo.svg";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { BreedsProvider } from "./context";

function App() {
  return (
    <BreedsProvider>
      <BrowserRouter>
        <ScrollToTop>
          <div style={app}>
            <div style={app__logo}>
              <Link to="/">
                <img src={logo} alt="CatWiki" />
              </Link>
            </div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="breeds/:breedName" element={<BreedDetail />}></Route>
            </Routes>
          </div>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </BreedsProvider>
  );
}

export default App;

const app = {
  display: "flex",
  padding: "36px 96px 0px 96px",
  flexDirection: "column",
  height: "100hv",
  width: "100wv",
};
const app__logo = {
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: "20px",
};
