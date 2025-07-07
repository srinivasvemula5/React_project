import React from "react";
import Registration from "./components/Registration";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login";
import Useri from "./components/useri";
import Laptops from "./components/Laptops";
import Mobiles from "./components/Mobiles";
import NavBar from "./components/NavBar";
import TeleVision from "./components/TeleVision";
import Airconditioner from "./components/Airconditioner";
import AllItems from "./components/AllItems";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/reg" replace />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/log" element={<Login />} />
        <Route path="/user" element={<Useri />} />
        <Route path="/laptop" element={<Laptops />} />
        <Route path="/phone" element={<Mobiles />} />
        <Route path="/bar" element={<NavBar />} />
        <Route path="/tv" element={<TeleVision />} />
        <Route path="/ac" element={<Airconditioner />} />
        <Route path="/all" element={<AllItems />} />
      </Routes>
    </BrowserRouter>
  );
}
 