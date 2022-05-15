import React, { ChangeEvent, FC, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Alert } from "@mui/material";

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
  const [warning, setWarning] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value, maxLength } = event.target;
    if (value.length === maxLength) {
      setWarning(true);
    } else {
      setWarning(false);
    }
    setTextInput(value);
  };

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
            type="text"
            fullWidth
            variant="standard"
            value={textInput}
            inputProps={{ maxLength: 30 }}
            onChange={handleChange}
          />
          {warning && (
            <Alert severity="warning">
              Please provide a name less than 30 characters
            </Alert>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAction(onClose, "")}>Cancel</Button>
        <Button
          disabled={warning}
          onClick={handleAction(() => onSuccess(textInput), "")}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
