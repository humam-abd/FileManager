import React, { FC } from "react";
import { Grid } from "@mui/material";
import {
  StyledCreateFolderIcon,
  StyledFolderIcon,
  StyledIconButton,
} from "./index.styled";

interface FolderProps {
  name?: string;
  createFolder?: boolean;
  onClick: () => void;
}

export const Folder: FC<FolderProps> = ({ name, createFolder, onClick }) => (
  <Grid item lg={1}>
    <StyledIconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={onClick}
    >
      {createFolder ? (
        <StyledCreateFolderIcon color="primary" />
      ) : (
        <>
          <StyledFolderIcon color="primary" />
          {name}
        </>
      )}
    </StyledIconButton>
  </Grid>
);
