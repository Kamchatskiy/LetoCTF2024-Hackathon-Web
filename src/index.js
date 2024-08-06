import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { Box } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box>
        <App />
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
