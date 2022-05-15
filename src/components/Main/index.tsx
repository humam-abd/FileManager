import React, { FC, useState } from "react";
import { Grid } from "@mui/material";
import { Body } from "../Body";
import { Folder } from "../Folder";
import { Header } from "../Header";
import { Modal } from "../Modal";
import { useFolderContext } from "../../domain/context/FolderContext";
import { FolderDetail } from "../../domain/interfaces";

export const Main: FC = () => {
  const [open, setOpen] = useState(false);

  const {
    folders,
    setFolders,
    folderId,
    setFolderId,
    setBreadcrumbs,
    breadcrumbs,
    selectedFolderId,
    setSelectedFolderId,
  } = useFolderContext();

  const handleFolderCreation = (value: string) => {
    setOpen(false);
    const updatedFolders = [
      ...folders,
      { id: folderId, name: value, parentNodeId: selectedFolderId },
    ];

    setFolders(updatedFolders);
    setFolderId(folderId + 1);
  };

  const handleFolderClick = (folder: FolderDetail) => () => {
    const updatedBreadcrumbs = [
      ...breadcrumbs,
      { id: folder.id, name: folder.name },
    ];

    setBreadcrumbs(updatedBreadcrumbs);
    setSelectedFolderId?.(folder.id);
  };

  const filteredFolders = folders.filter(
    (item) => item.parentNodeId === selectedFolderId
  );

  return (
    <>
      <Header />
      <Body>
        <Grid container>
          {filteredFolders?.map((folder) => (
            <Folder name={folder.name} onClick={handleFolderClick(folder)} />
          ))}
          <Folder createFolder onClick={() => setOpen(true)} />
        </Grid>
      </Body>
      <Modal
        title="Create a folder"
        isOpen={open}
        onClose={() => setOpen(false)}
        onSuccess={handleFolderCreation}
        message="Please provide a name for the folder"
      />
    </>
  );
};
