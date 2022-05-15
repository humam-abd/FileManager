import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

export const StyledIconButton = styled(IconButton)(() => ({
  mr: 2,
  borderRadius: 2,
  display: "flex",
  flexDirection: "column",
  fontSize: 16,
}));

export const StyledFolderIcon = styled(FolderIcon)(() => ({
  fontSize: 60,
}));

export const StyledCreateFolderIcon = styled(CreateNewFolderIcon)(() => ({
  fontSize: 60,
  opacity: 0.5,
}));
