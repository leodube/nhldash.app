import React from "react";

// MUI Imports
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

// Can be used to override default theme
const defaultTheme = createTheme({});

const BaseTemplate = (props) => {
  // Destructure props
  const { children } = props;

  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>{children}</Box>
      </main>
    </ThemeProvider>
  );
};

export default BaseTemplate;
