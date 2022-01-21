import React, { useState, createContext, ReactChildren, ReactChild } from 'react';

import { IFolders } from '../interfaces/interface';

interface AppContextInterface {
    folders: IFolders[];
    setFolders: (data: IFolders[]) => void;
    selectFolders: string[];
    setSelectFolders:(data: string[]) => void;
}

interface IProps {
    children: ReactChild | ReactChildren;
  }

export const DataFoldersContext = createContext<AppContextInterface | null>(null);

function DataFoldersProvider({ children }:IProps ):JSX.Element {

    const [folders, setFolders] = useState<IFolders[]>([]);
    const [selectFolders, setSelectFolders] = useState<string[]>([]);

    return (
        <DataFoldersContext.Provider value={{
            folders,
            setFolders,
            selectFolders,
            setSelectFolders,
		}}>
			{ children }
		</DataFoldersContext.Provider>	
    )
}

export default DataFoldersProvider;
