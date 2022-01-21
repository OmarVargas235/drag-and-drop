import React, { useContext } from 'react';

import { FolderStyle } from './style';
import { IFolders } from '../../interfaces/interface';
import { DataFoldersContext } from '../../context/DataFoldersProvider';

interface IProps {
  folder:IFolders
}

const FoldersPage = ({ folder }:IProps): JSX.Element => {

  const context = useContext( DataFoldersContext );

  const handleClick = (folder:IFolders):void => {

    const { names } = folder;

    context?.setSelectFolders(names);
  }

  return (
    <FolderStyle
      onClick={() => handleClick(folder)}
    >
      <div className="text-center text-uppercase">{folder.extension}</div>
      <div className="body text-center"><span>{folder.cont}</span></div>
    </FolderStyle>
  )
}

export default FoldersPage;