import React, { useContext } from 'react';

import { DataFoldersContext } from '../../context/DataFoldersProvider';
import FoldersPage from './FoldersPage';

function Folders(): JSX.Element {

  const context = useContext( DataFoldersContext );

  return <FoldersPage
    names={context?.selectFolders}
  />;
}

export default Folders;
