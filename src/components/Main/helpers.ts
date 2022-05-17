import { AssetDetail, Breadcrumb } from "../../domain/interfaces";

export const onNameChange = (
  name: string,
  setOpen: (value: boolean) => void,
  edit: boolean,
  assets: AssetDetail[],
  setAssets: (asset: AssetDetail[]) => void,
  uId: number,
  setUId: (id: number) => void,
  selectedFolderId?: number,
  selectedFolder?: AssetDetail
) => {
  setOpen(false);
  if (edit) {
    const updatedAssetList = assets.map((item) => {
      if (item.id === selectedFolder?.id) {
        item.name = name;
      }
      return item;
    });
    setAssets(updatedAssetList);
  } else {
    const updatedAssets = [
      ...assets,
      { id: uId, name, parentNodeId: selectedFolderId },
    ];

    setAssets(updatedAssets);
    setUId(uId + 1);
  }
};

export const onFolderClick =
  (
    asset: AssetDetail,
    edit: boolean,
    setSelectedFolder: (folder: AssetDetail) => void,
    setOpen: (value: boolean) => void,
    breadcrumbs: Breadcrumb[],
    setBreadcrumbs: (breadcrumb: Breadcrumb[]) => void,
    setSelectedFolderId?: (id: number) => void
  ) =>
  () => {
    if (edit) {
      setSelectedFolder(asset);
      setOpen(true);
    } else {
      const updatedBreadcrumbs = [
        ...breadcrumbs,
        { id: asset.id, name: asset.name },
      ];

      setBreadcrumbs(updatedBreadcrumbs);
      setSelectedFolderId?.(asset.id);
    }
  };

export const onFileUpload = (
  filename: string,
  assets: AssetDetail[],
  uId: number,
  setAssets: (assets: AssetDetail[]) => void,
  setUId: (id: number) => void,
  selectedFolderId?: number
) => {
  const updatedAssetList = [
    ...assets,
    {
      id: uId,
      name: filename,
      parentNodeId: selectedFolderId,
      isFile: true,
    },
  ];

  setAssets(updatedAssetList);
  setUId(uId + 1);
};
