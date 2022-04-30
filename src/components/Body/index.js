import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const Body = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Box sx={{ height: "100vh", paddingTop: 3 }}>{children}</Box>
      </Container>
    </>
  );
};
