import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

import { Section } from './style';
import FoldersPage from './FoldersPage';
import { IFolders } from '../../interfaces/interface';

interface IProps {
    onDrop: (e:React.DragEvent<HTMLDivElement>) => void;
    onDragOver: (e:React.DragEvent<HTMLDivElement>) => void;
    onDragEnd: (result:DropResult) => void;
    folders: IFolders[] | undefined;
}

const DropBoxPage = ({ folders, onDrop, onDragOver, onDragEnd }:IProps):JSX.Element => (
    <DragDropContext onDragEnd={onDragEnd}>
        <Section
            onDrop={onDrop}
            onDragOver={onDragOver}
        >
            {
                folders?.map((folder, index) => (
                    <Droppable droppableId={`list-${index}`} key={index}>
                        {provided => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <Draggable draggableId={index+""} index={index}>
                                    {provided => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <FoldersPage
                                                folder={folder}
                                            />
                                        </div>
                                    )}
                                </Draggable>

                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))
            }
        </Section>
    </DragDropContext>
)

export default DropBoxPage;
