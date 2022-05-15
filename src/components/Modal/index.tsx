import React, { FC, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string) => void;
  message?: string;
}

export const Modal: FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  onSuccess,
  message,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [textInput, setTextInput] = useState("");

  const handleAction = (action: () => void, value: string) => () => {
    action();
    setTextInput(value);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {message}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Type in a folder name"
            type="email"
            fullWidth
            variant="standard"
            value={textInput}
            onChange={(e) => {
              const { value } = e.target;
              setTextInput(value);
            }}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleAction(onClose, "")}>
          Cancel
        </Button>
        <Button
          onClick={handleAction(() => onSuccess(textInput), "")}
          autoFocus
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
