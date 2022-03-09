import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { ColorModeContextProvider } from "./utils/Theme";

// // it could be your App.tsx file or theme file that is included in your tsconfig.json
// import { Theme } from "@mui/material/styles";

// declare module "@mui/styles/defaultTheme" {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface (remove this line if you don't have the rule enabled)
//   interface DefaultTheme extends Theme {}
// }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorModeContextProvider>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <App />
        </StyledEngineProvider>
      </ColorModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
