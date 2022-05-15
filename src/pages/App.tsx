import React, { FC } from "react";
import { Main } from "../components/Main";
import "./App.css";
import {
  FolderContextProvider,
  initialContextValues,
} from "../domain/context/FolderContext";

const App: FC = () => {
  return (
    <FolderContextProvider {...initialContextValues}>
      <div className="App">
        <Main />
      </div>
    </FolderContextProvider>
  );
};

export default App;
