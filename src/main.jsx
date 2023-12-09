import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DataStory from "./components/DataStory";
import Code from "./components/Code";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/datastory" element={<DataStory />} />
        <Route path="/code" element={<Code />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
