import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { ColorModeContextProvider } from "./utils/Theme";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <ToastContainer position="bottom-right" pauseOnHover newestOnTop />
            <App />
          </StyledEngineProvider>
        </ColorModeContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
