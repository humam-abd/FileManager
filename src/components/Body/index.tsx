import React, { FC, ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { BasicBreadcrumbs } from "../Breadcrumb";

interface BodyProps {
  children: ReactNode;
}

export const Body: FC<BodyProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Box sx={{ height: "100vh", paddingTop: 3 }}>
          <BasicBreadcrumbs />
          {children}
        </Box>
      </Container>
    </>
  );
};
