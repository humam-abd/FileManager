import React, { FC } from "react";
import { Grid, styled } from "@mui/material";
import { StyledIconButton } from "../Folder/index.styled";
import { ColorProps } from "../../domain/interfaces";
import { StyledFileIcon, StyledUploadFileIcon } from "./index.styled";

interface FileComponentProps {
  fileUpload?: boolean;
  onChange?: (value: string) => void;
  name?: string;
}

export const FileComponent: FC<FileComponentProps> = ({
  fileUpload,
  onChange,
  name,
}) => {
  const Input = styled("input")({
    display: "none",
  });

  const iconProps = {
    color: "primary" as ColorProps,
  };

  return (
    <Grid item lg={1}>
      <StyledIconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        {fileUpload ? (
          <label htmlFor="contained-button-file">
            <Input
              multiple
              type="file"
              id="contained-button-file"
              onChange={(e) => {
                const { value } = e.target;
                onChange?.(value);
              }}
            />
            <StyledUploadFileIcon {...iconProps} />
          </label>
        ) : (
          <>
            <StyledFileIcon {...iconProps} />
            {name}
          </>
        )}
      </StyledIconButton>
    </Grid>
  );
};
