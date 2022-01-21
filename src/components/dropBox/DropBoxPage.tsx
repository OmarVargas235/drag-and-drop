import React, { HTMLAttributeAnchorTarget } from 'react';

import { Section } from './style';
import FoldersPage from './FoldersPage';
import { IFolders } from '../../interfaces/interface';

interface IProps {
    onDrop: (e:React.DragEvent<HTMLDivElement>) => void;
    onDragOver: (e:React.DragEvent<HTMLDivElement>) => void;
    folders: IFolders[] | undefined;
}

const DropBoxPage = ({ folders, onDrop, onDragOver }:IProps):JSX.Element => (
    <Section onDrop={onDrop} onDragOver={onDragOver}>
        {
            folders?.map((folder, index) => (
                <FoldersPage
                    key={index}
                    folder={folder}
                />  
            ))
        }
    </Section>
)

export default DropBoxPage;
