import styled from "@emotion/styled";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export const StyledFileIcon = styled(InsertDriveFileIcon)(() => ({
  fontSize: 60,
}));

export const StyledUploadFileIcon = styled(FileUploadIcon)(() => ({
  fontSize: 60,
  opacity: 0.5,
}));

export const StyledInput = styled("input")({
  display: "none",
});
