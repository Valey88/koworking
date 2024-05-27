import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";

import Home from "./page/Home/Home";
import Admin from "./page/Admin/Admin";
import Booking from "./page/Booking/Booking";
import CreateRooms from "./page/Admin/createRooms/CreateRooms";
import DeleteImage from "./page/Admin/deleteRoomsImage/DeleteImage";
import Auth from "./page/Admin/Auth/Auth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/CreateRooms" element={<CreateRooms />} />
        <Route path="/DeleteImage" element={<DeleteImage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
