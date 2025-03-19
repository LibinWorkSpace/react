import React, { useState } from "react";
import Home from "./pages/Home";
import List from "./pages/List";
import Submit from "./pages/Submit";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="app-container">
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
