import React, { FC } from "react";
import { Grid } from "@mui/material";
import { IconComponent } from "./IconComponent";
import { StyledIconButton } from "./index.styled";

interface FolderProps {
  name?: string;
  createFolder?: boolean;
  onClick: () => void;
  edit?: boolean;
}

export const Folder: FC<FolderProps> = ({
  name,
  createFolder,
  onClick,
  edit,
}) => (
  <Grid item lg={1}>
    <StyledIconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={onClick}
    >
      <IconComponent createFolder={createFolder} edit={edit} name={name} />
    </StyledIconButton>
  </Grid>
);
