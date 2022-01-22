import React, { useContext } from 'react';
import { DropResult } from "react-beautiful-dnd";

import DropBoxPagePage from './DropBoxPage';
import { DataFoldersContext } from '../../context/DataFoldersProvider';
import { IFolders } from '../../interfaces/interface';

type typeExtensions = number|undefined;

function DropBox(): JSX.Element {

  const context = useContext( DataFoldersContext );

  function onDrop(e:React.DragEvent<HTMLDivElement>):void {

    e.preventDefault();

    const files:FileList = e.dataTransfer.files;
    const names = Array.from(files).map((file:File) => file.name);
    const extensions = names.map((name:any) => name.match(/.\w*$/gi)[0].replace(".", "") );
    const arr:IFolders[] = [];
    const copyFolders:IFolders[] = JSON.parse(JSON.stringify(context?.folders));
    
    names.forEach((name:string, index:number) => {
      
      const extension:string = extensions[index];
      const indexExtensionState:typeExtensions = context?.folders.findIndex(folder => folder.extension === extension);
      const indexExtensionArr:typeExtensions = arr.findIndex(folder => folder.extension === extension);
      
      if (indexExtensionArr !== -1) {

        arr[indexExtensionArr].names.push(name);
        arr[indexExtensionArr].cont += 1;
      }
      
      if (indexExtensionState !== -1 && context?.folders) {
        
        copyFolders[indexExtensionState || 0].names.push(name);
        copyFolders[indexExtensionState || 0].cont += 1;

        (context?.selectFolders.length > 0) && context?.setSelectFolders(copyFolders[indexExtensionState || 0].names);
        
        context?.setFolders(copyFolders);
      }

      (indexExtensionState === -1 && indexExtensionArr === -1) && arr.push({
        names: [name],
        cont: 1,
        extension,
      });
    });

    arr.length > 0 && context?.setFolders([...context?.folders, ...arr]);
  }

  const onDragOver = (e:React.DragEvent<HTMLDivElement>):void => {

    e.stopPropagation();
    e.preventDefault();
  }

  const onDragEnd = (result:DropResult):void => {

    const copyFolders:IFolders[] = JSON.parse(JSON.stringify(context?.folders));
    const { source, destination } = result;
    const dataSource = copyFolders[source.index];
    const dataDestination = copyFolders[destination?.index || 0];

    copyFolders[source.index] = dataDestination;
    copyFolders[destination?.index || 0] = dataSource;

    context?.setFolders(copyFolders);
  }
  
  return (
    <DropBoxPagePage
      folders={context?.folders}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    />
  )
}

export default DropBox;
