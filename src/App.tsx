import React from "react";
import { Homepage } from "./pages/Homepage/Homepage";
import { WrapperStyled } from "./styles/general.styled";
import { NavbarContainer } from "./components/Navbar/NavbarContainer";
import { Routes, Route } from "react-router-dom";
import { NewsPageContainer } from "./pages/NewsPage/NewsPageContainer";

const WithNavbar: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <NavbarContainer />
      {props.children}
    </>
  );
};

function App() {
  return (
    <WrapperStyled>
      <Routes>
        <Route
          path="/"
          element={
            <WithNavbar>
              <Homepage />
            </WithNavbar>
          }
        />

        <Route
          path="/news/:id"
          element={
            <WithNavbar>
              <NewsPageContainer />
            </WithNavbar>
          }
        />
      </Routes>
    </WrapperStyled>
  );
}

export default App;
