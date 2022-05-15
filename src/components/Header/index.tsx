import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { StyledHeader } from "./index.styled";

export const Header: FC = () => (
  <StyledHeader>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Folder Management
        </Typography>
      </Toolbar>
    </AppBar>
  </StyledHeader>
);
