import React, { FC } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

interface FolderProps {
  name?: string;
  createFolder?: boolean;
  onClick: () => void;
}

export const Folder: FC<FolderProps> = ({ name, createFolder, onClick }) => {
  return (
    <Grid item lg={1}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          mr: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          fontSize: 16,
        }}
      >
        {createFolder ? (
          <>
            <CreateNewFolderIcon
              color="primary"
              sx={{ fontSize: 60, opacity: 0.5 }}
              onClick={onClick}
            />
          </>
        ) : (
          <>
            <FolderIcon
              color="primary"
              sx={{ fontSize: 60 }}
              onClick={onClick}
            />
            {name}
          </>
        )}
      </IconButton>
    </Grid>
  );
};
