import React, { FC } from "react";
import { ColorProps } from "../../domain/interfaces";
import {
  StyledBox,
  StyledCreateFolderIcon,
  StyledEditFolderIcon,
  StyledFolderIcon,
} from "./index.styled";

interface IconComponentProps {
  createFolder?: boolean;
  edit?: boolean;
  name?: string;
}

export const IconComponent: FC<IconComponentProps> = ({
  createFolder,
  edit,
  name,
}) => {
  const iconProps = {
    color: "primary" as ColorProps,
  };

  if (createFolder) return <StyledCreateFolderIcon {...iconProps} />;
  return edit ? (
    <>
      <StyledBox>
        <StyledFolderIcon {...iconProps} />
        <StyledEditFolderIcon {...iconProps} />
      </StyledBox>
      {name}
    </>
  ) : (
    <>
      <StyledFolderIcon {...iconProps} />
      {name}
    </>
  );
};
