import React from 'react';

import DropBox from './components/dropBox';
import Folders from './components/folders/';
import { Div } from './styles-globals/styles';
import DataFoldersProvider from './context/DataFoldersProvider';


function App(): JSX.Element {
  return (
    <DataFoldersProvider>
      <Div>
        <DropBox />
        <Folders />
      </Div>
    </DataFoldersProvider>
  )
}

export default App;