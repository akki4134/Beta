import React from "react";
import { Routes, Route } from "react-router-dom";

import Error from "./Error"
import Index from "./canada/Index";
import Studentvisa from "./canada/visa/Studentvisa";

import Home from "./Home";

export default function PageRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/*' element={<Error/>} />
        <Route path="/canada" element={<Index />} />
        <Route path="/canada/study" element={<Studentvisa />} />
      </Routes>
    </div>
  );
}
