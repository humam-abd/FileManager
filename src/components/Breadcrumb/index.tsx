import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useFolderContext } from "../../domain/context/FolderContext";

export const BasicBreadcrumbs: FC = () => {
  const { breadcrumbs, setSelectedFolderId, setBreadcrumbs } =
    useFolderContext();

  const handleClick =
    (id: number, index: number) =>
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault();
      setSelectedFolderId?.(id);
      setBreadcrumbs(breadcrumbs.slice(0, index + 1));
    };

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((crumb, index) => {
          return (
            <Typography
              key={crumb.id}
              color="text.primary"
              onClick={handleClick(crumb.id, index)}
              sx={{
                cursor: "pointer",
              }}
            >
              {crumb.name}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};
