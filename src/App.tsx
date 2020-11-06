import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./hooks/modal";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <ModalProvider>
          <Routes />
          <GlobalStyle />
        </ModalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
