import React, {
  ReactNode,
  useContext,
  useState,
  createContext,
  FC,
} from "react";
import { Breadcrumb, AssetDetail } from "../interfaces";

interface FolderContextProps {
  uId: number;
  setUId: (id: number) => void;
  assets: Array<AssetDetail>;
  setAssets: (value: Array<AssetDetail>) => void;
  breadcrumbs: Array<Breadcrumb>;
  setBreadcrumbs: (breadcrumbs: Array<Breadcrumb>) => void;
  children?: ReactNode;
  selectedFolderId?: number;
  setSelectedFolderId?: (id: number) => void;
}

export const initialContextValues: FolderContextProps = {
  uId: 1,
  setUId: () => null,
  assets: [],
  setAssets: () => null,
  breadcrumbs: [{ id: 0, name: `Home` }],
  setBreadcrumbs: () => null,
  selectedFolderId: 0,
  setSelectedFolderId: () => null,
};

const FolderContext = createContext<FolderContextProps>(initialContextValues);

export const FolderContextProvider: FC<FolderContextProps> = ({ children }) => {
  const [uId, setUId] = useState(1);
  const [assets, setAssets] = useState<Array<AssetDetail>>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<Array<Breadcrumb>>([
    { id: 0, name: `Home` },
  ]);
  const [selectedFolderId, setSelectedFolderId] = useState(0);

  return (
    <FolderContext.Provider
      value={{
        uId,
        setUId,
        assets,
        setAssets,
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
