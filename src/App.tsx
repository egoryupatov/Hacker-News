import React from "react";
import { Homepage } from "./pages/Homepage/Homepage";
import { WrapperStyled } from "./styles/general.styled";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { NewsPage } from "./pages/NewsPage/NewsPage";

function App() {
  return (
    <WrapperStyled>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
    </WrapperStyled>
  );
}

export default App;
