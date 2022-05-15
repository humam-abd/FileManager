import React, {
  ReactNode,
  useContext,
  useState,
  createContext,
  FC,
} from "react";
import { Breadcrumb, FolderDetail } from "../interfaces";

interface FolderContextProps {
  folderId: number;
  setFolderId: (id: number) => void;
  folders: Array<FolderDetail>;
  setFolders: (value: Array<FolderDetail>) => void;
  breadcrumbs: Array<Breadcrumb>;
  setBreadcrumbs: (breadcrumbs: Array<Breadcrumb>) => void;
  children?: ReactNode;
  selectedFolderId?: number;
  setSelectedFolderId?: (id: number) => void;
}

export const initialContextValues: FolderContextProps = {
  folderId: 1,
  setFolderId: () => null,
  folders: [],
  setFolders: () => null,
  breadcrumbs: [{ id: 0, name: `Home` }],
  setBreadcrumbs: () => null,
  selectedFolderId: 0,
  setSelectedFolderId: () => null,
};

const FolderContext = createContext<FolderContextProps>(initialContextValues);

export const FolderContextProvider: FC<FolderContextProps> = ({ children }) => {
  const [folderId, setFolderId] = useState(1);
  const [folders, setFolders] = useState<Array<FolderDetail>>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<Array<Breadcrumb>>([
    { id: 0, name: `Home` },
  ]);
  const [selectedFolderId, setSelectedFolderId] = useState(0);

  return (
    <FolderContext.Provider
      value={{
        folderId,
        setFolderId,
        folders,
        setFolders,
        breadcrumbs,
        setBreadcrumbs,
        selectedFolderId,
        setSelectedFolderId,
      }}
    >
      {children}
    </FolderContext.Provider>
  );
};

export const useFolderContext = () => useContext(FolderContext);
