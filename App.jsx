import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DetailedPage from "./pages/product/DetailedPage";
import SearchAppBar from "./components/Navbar";

function App() {
  return (
    <>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<DetailedPage />} />
      </Routes>
    </>
  );
}

export default App;
