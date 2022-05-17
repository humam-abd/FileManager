import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { StyledHeader, StyledTypography } from "./index.styled";

export const Header: FC = () => (
  <StyledHeader>
    <AppBar position="static">
      <Toolbar>
        <StyledTypography variant="h6">File Manager</StyledTypography>
      </Toolbar>
    </AppBar>
  </StyledHeader>
);
