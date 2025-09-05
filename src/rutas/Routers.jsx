import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Carshop } from "../pages/Carshop";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

export const Routers = () => {
  return (
    <>
      <BrowserRouter basename="/4YouPage">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carshop" element={<Carshop />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
