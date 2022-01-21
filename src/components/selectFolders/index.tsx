import React, { useContext } from 'react';

import { DataFoldersContext } from '../../context/DataFoldersProvider';
import SelectFoldersPage from './SelectFoldersPage';

function SelectFolders(): JSX.Element {

  const context = useContext( DataFoldersContext );

  return <SelectFoldersPage
    names={context?.selectFolders}
  />;
}

export default SelectFolders;
