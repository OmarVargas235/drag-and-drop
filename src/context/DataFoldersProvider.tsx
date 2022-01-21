import React, { useState, createContext, ReactChildren, ReactChild } from 'react';

import { IFolders } from '../interfaces/interface';

interface AppContextInterface {
    folders: IFolders[];
    setFolders: (data: IFolders[]) => void;
}

interface IProps {
    children: ReactChild | ReactChildren;
  }

export const DataFoldersContext = createContext<AppContextInterface | null>(null);

function DataFoldersProvider({ children }:IProps ):JSX.Element {

    const [folders, setFolders] = useState<IFolders[]>([]);

    return (
        <DataFoldersContext.Provider value={{
            folders,
            setFolders,
		}}>
			{ children }
		</DataFoldersContext.Provider>	
    )
}

export default DataFoldersProvider;
