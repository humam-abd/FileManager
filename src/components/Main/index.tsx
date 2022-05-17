import React, { FC, useState } from "react";
import { Button, Grid } from "@mui/material";
import { Body } from "../Body";
import { Folder } from "../Folder";
import { Header } from "../Header";
import { Modal } from "../Modal";
import { useFolderContext } from "../../domain/context/FolderContext";
import { AssetDetail } from "../../domain/interfaces";
import { StyledBox } from "./index.styled";
import { FileComponent } from "../FileComponent";
import { onFileUpload, onFolderClick, onNameChange } from "./helpers";

export const Main: FC = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<AssetDetail>();

  const {
    assets,
    setAssets,
    uId,
    setUId,
    setBreadcrumbs,
    breadcrumbs,
    selectedFolderId,
    setSelectedFolderId,
  } = useFolderContext();

  const handleNameChange = (name: string) =>
    onNameChange(
      name,
      setOpen,
      edit,
      assets,
      setAssets,
      uId,
      setUId,
      selectedFolderId,
      selectedFolder
    );

  const handleFolderClick = (asset: AssetDetail) =>
    onFolderClick(
      asset,
      edit,
      setSelectedFolder,
      setOpen,
      breadcrumbs,
      setBreadcrumbs,
      setSelectedFolderId
    );

  const handleFileUpload = (filename: string) =>
    onFileUpload(filename, assets, uId, setAssets, setUId, selectedFolderId);

  const filteredAssets = assets.filter(
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
          {filteredAssets?.map((asset) => {
            if (asset.isFile) {
              const formattedNameArray = asset.name.split("\\");
              const formattedName =
                formattedNameArray[formattedNameArray.length - 1];
              return <FileComponent key={asset.id} name={formattedName} />;
            }
            return (
              <Folder
                key={asset.id}
                name={asset.name}
                onClick={handleFolderClick(asset)}
                edit={edit}
              />
            );
          })}
          <FileComponent fileUpload onChange={handleFileUpload} />
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
