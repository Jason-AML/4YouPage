import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Carshop } from "../pages/Carshop";

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carshop" element={<Carshop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
