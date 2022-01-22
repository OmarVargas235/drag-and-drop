import React, { useContext } from 'react';
import { DropResult } from "react-beautiful-dnd";

import { DataFoldersContext } from '../../context/DataFoldersProvider';
import SelectFoldersPage from './SelectFoldersPage';

function SelectFolders(): JSX.Element {

  const context = useContext( DataFoldersContext );

  const onDragEnd = (result:DropResult):void => {

    const copyNames:string[] = JSON.parse(JSON.stringify(context?.selectFolders));
    const { source, destination } = result;
    const dataSource = copyNames[source.index];
    const dataDestination = copyNames[destination?.index || 0];

    copyNames[source.index] = dataDestination;
    copyNames[destination?.index || 0] = dataSource;
    
    context?.setSelectFolders(copyNames);
  }

  return <SelectFoldersPage
    names={context?.selectFolders}
    onDragEnd={onDragEnd}
  />;
}

export default SelectFolders;
