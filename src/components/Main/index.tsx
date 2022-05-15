import React, { FC, useState } from "react";
import { Button, Grid } from "@mui/material";
import { Body } from "../Body";
import { Folder } from "../Folder";
import { Header } from "../Header";
import { Modal } from "../Modal";
import { useFolderContext } from "../../domain/context/FolderContext";
import { FolderDetail } from "../../domain/interfaces";
import { StyledBox } from "./index.styled";

export const Main: FC = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<FolderDetail>();

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

  const handleNameChange = (value: string) => {
    setOpen(false);
    if (edit) {
      const updatedFolderList = folders.map((item) => {
        if (item.id === selectedFolder?.id) {
          item.name = value;
        }
        return item;
      });
      setFolders(updatedFolderList);
    } else {
      const updatedFolders = [
        ...folders,
        { id: folderId, name: value, parentNodeId: selectedFolderId },
      ];

      setFolders(updatedFolders);
      setFolderId(folderId + 1);
    }
  };

  const handleFolderClick = (folder: FolderDetail) => () => {
    if (edit) {
      setSelectedFolder(folder);
      setOpen(true);
    } else {
      const updatedBreadcrumbs = [
        ...breadcrumbs,
        { id: folder.id, name: folder.name },
      ];

      setBreadcrumbs(updatedBreadcrumbs);
      setSelectedFolderId?.(folder.id);
    }
  };

  const filteredFolders = folders.filter(
    (item) => item.parentNodeId === selectedFolderId
  );

  return (
    <>
      <Header />
      <Body>
        <StyledBox>
          <Button variant="outlined" onClick={() => setEdit(!edit)}>
            {!edit ? "Edit" : "Save"}
          </Button>
        </StyledBox>
        <Grid container>
          {filteredFolders?.map((folder) => (
            <Folder
              key={folder.id}
              name={folder.name}
              onClick={handleFolderClick(folder)}
              edit={edit}
            />
          ))}
          <Folder createFolder onClick={() => setOpen(true)} />
        </Grid>
      </Body>
      <Modal
        title="Create a folder"
        isOpen={open}
        onClose={() => setOpen(false)}
        onSuccess={handleNameChange}
        message="Please provide a name for the folder"
        selectedFolder={selectedFolder}
      />
    </>
  );
};
