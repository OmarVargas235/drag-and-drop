import React, { useContext } from 'react';

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
    
    names.forEach((name:string, index:number) => {
      
      const extension:string = extensions[index];
      const indexExtension:typeExtensions = context?.folders.findIndex(folder => folder.extension === extension);
      
      if (indexExtension !== -1 && context?.folders) {

        const copyFolders:IFolders[] = JSON.parse(JSON.stringify(context?.folders));
        copyFolders[indexExtension || 0].cont += 1;
        
        context?.setFolders(copyFolders);
      }

      indexExtension === -1 && arr.push({
        name,
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
  
  return (
    <DropBoxPagePage
      folders={context?.folders}
      onDrop={onDrop}
      onDragOver={onDragOver}
    />
  )
}

export default DropBox;
