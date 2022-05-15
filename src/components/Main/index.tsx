import React, { FC, useState } from "react";
import { Body } from "../Body";
import { Folder } from "../Folder";
import { Header } from "../Header";
import { Grid } from "@mui/material";
import { Modal } from "../Modal";
import { useFolderContext } from "../../domain/context/FolderContext";

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

  const handleSuccess = (value: string) => {
    setOpen(false);
    setFolders([
      ...folders,
      { id: folderId, name: value, parentNodeId: selectedFolderId },
    ]);
    setFolderId(folderId + 1);
  };

  const filteredFolders = folders.filter(
    (item) => item.parentNodeId === selectedFolderId
  );

  return (
    <>
      <Header />
      <Body>
        <Grid container>
          {filteredFolders?.map((folder) => {
            return (
              <Folder
                name={folder.name}
                onClick={() => {
                  setBreadcrumbs([
                    ...breadcrumbs,
                    { id: folder.id, name: folder.name },
                  ]);
                  setSelectedFolderId?.(folder.id);
                }}
              />
            );
          })}
          <Folder createFolder onClick={() => setOpen(true)} />
        </Grid>
      </Body>
      <Modal
        title="Create a folder"
        isOpen={open}
        onClose={() => setOpen(false)}
        onSuccess={handleSuccess}
        message="Please provide a name for the folder"
      />
    </>
  );
};
