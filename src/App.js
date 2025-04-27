import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <ThemeProvider theme={chosenTheme}>
        <>
          <GlobalStyles />
          <div>
            <Main theme={chosenTheme} />
          </div>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
