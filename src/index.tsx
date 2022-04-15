import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { ColorModeContextProvider } from "./utils/Theme";
import { Provider } from "react-redux";
import { store } from "./store/index";

const rootContainer = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

rootContainer.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ColorModeContextProvider>
          <StyledEngineProvider injectFirst>
            <CssBaseline />
            <App />
          </StyledEngineProvider>
        </ColorModeContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
