import React from 'react';

import { FolderStyle } from './style';
import { IFolders } from '../../interfaces/interface';

interface IProps {
  folder:IFolders
}

const FoldersPage = ({ folder }:IProps): JSX.Element => (
  <FolderStyle>
    <div className="text-center text-uppercase">{folder.extension}</div>
    <div className="body text-center"><span>{folder.cont}</span></div>
  </FolderStyle>
)

export default FoldersPage;