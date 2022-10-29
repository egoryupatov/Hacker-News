import React from "react";
import { Homepage } from "./pages/Homepage/Homepage";
import { WrapperStyled } from "./styles/general.styled";
import { NavbarContainer } from "./components/Navbar/NavbarContainer";
import { Routes, Route } from "react-router-dom";
import { NewsPageContainer } from "./pages/NewsPage/NewsPageContainer";

function App() {
  return (
    <WrapperStyled>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news/:id" element={<NewsPageContainer />} />
      </Routes>
    </WrapperStyled>
  );
}

export default App;
