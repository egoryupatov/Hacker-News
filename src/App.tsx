import React from "react";
import { Homepage } from "./pages/Homepage/Homepage";
import { WrapperStyled } from "./styles/general.styled";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <WrapperStyled>
      <Navbar />
      <Homepage />
    </WrapperStyled>
  );
}

export default App;
