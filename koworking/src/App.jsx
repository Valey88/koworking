import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/header/Header";
import Cmp1 from "./components/pagecomponents/Cmp1/Cmp1";
import Cmp2 from "./components/pagecomponents/Cmp2/Cmp2";
import Cmp3 from "./components/pagecomponents/Cmp3/Cmp3";
import Cmp4 from "./components/pagecomponents/Cmp4/Cmp4";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/C1" element={<Cmp1 />} />
        <Route path="/advantages" element={<Cmp2 />} />
        <Route path="/Spaces" element={<Cmp3 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
