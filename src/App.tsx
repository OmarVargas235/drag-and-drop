import React from 'react';

import DropBox from './components/dropBox';
import SelectFolders from './components/selectFolders';
import { Div } from './styles-globals/styles';
import DataFoldersProvider from './context/DataFoldersProvider';


function App(): JSX.Element {
  return (
    <DataFoldersProvider>
      <Div>
        <DropBox />
        <SelectFolders />
      </Div>
    </DataFoldersProvider>
  )
}

export default App;