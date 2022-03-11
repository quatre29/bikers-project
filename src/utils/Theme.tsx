import React, { createContext, useState, useMemo, useContext } from "react";
import {
  createTheme,
  ThemeProvider,
  PaletteMode,
  PaletteOptions,
  TypeBackground,
} from "@mui/material";
import {
  grey,
  deepOrange,
  yellow,
  orange,
  lime,
  green,
  lightGreen,
  deepPurple,
  blueGrey,
  indigo,
  cyan,
} from "@mui/material/colors";

type ColorMode = "dark" | "light";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export const ColorModeContextProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode as PaletteMode,
          background: {
            default: mode === "light" ? grey[100] : "#121212",
          },
          primary: {
            main: mode === "light" ? indigo[500] : grey[300],
            light: mode === "light" ? indigo[200] : grey[100],
            dark: mode === "light" ? indigo[600] : grey[600],
          },
          secondary: {
            main: indigo[400],
            light: indigo[200],
            dark: indigo[600],
          },
          text: {
            primary: blueGrey[800],
            secondary: blueGrey[500],
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
