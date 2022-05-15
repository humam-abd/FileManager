import React, { FC } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useFolderContext } from "../../domain/context/FolderContext";
import { StyledTypography } from "./index.styled";

export const BasicBreadcrumbs: FC = () => {
  const { breadcrumbs, setSelectedFolderId, setBreadcrumbs } =
    useFolderContext();

  const handleClick =
    (id: number, index: number) =>
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault();
      setSelectedFolderId?.(id);
      const updatedBreadcrumbs = breadcrumbs;
      setBreadcrumbs(updatedBreadcrumbs.slice(0, index + 1));
    };

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((crumb, index) => (
          <StyledTypography
            key={crumb.id}
            color="text.primary"
            onClick={handleClick(crumb.id, index)}
          >
            {crumb.name}
          </StyledTypography>
        ))}
      </Breadcrumbs>
    </div>
  );
};
