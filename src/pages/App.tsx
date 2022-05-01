import React, { FC, useState } from "react";
import "./App.css";
import { Header } from "../components/Header";
import { Body } from "../components/Body";
import { Folder } from "../components/Folder";
import { Grid } from "@mui/material";
import { Modal } from "../components/Modal";

const App: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Header />
      <Body>
        <Grid container>
          <Folder name="test" onClick={() => null} />
          <Folder name="new test" onClick={() => null} />
          <Folder createFolder onClick={() => setOpen(true)} />
        </Grid>
      </Body>
      <Modal
        title="Create a folder"
        isOpen={open}
        onClose={() => setOpen(false)}
        onSuccess={(value) => {
          setOpen(false);
          console.log(value);
        }}
        message="Please provide a name for the folder"
      />
    </div>
  );
};

export default App;
