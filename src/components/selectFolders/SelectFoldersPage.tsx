import react from 'React';
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

import { SelectFoldersStyled } from './style';

interface IProps {
    names: string[] | undefined;
    onDragEnd: (result:DropResult) => void;
}

const SelectFoldersPage = ({ names, onDragEnd }: IProps): JSX.Element => (
    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list-names">
            {provided => (
                <SelectFoldersStyled
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {
                        names?.map((name, index) => (
                            <Draggable key={index} draggableId={index+""} index={index}>
                                {(provided, snapshot) => (
                                     <p
                                        key={index}
                                        className='item'
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >{name}</p>
                                )}
                            </Draggable>
                        ))
                    }

                    {provided.placeholder}
                </SelectFoldersStyled>
            )}
        </Droppable>
    </DragDropContext>
)

export default SelectFoldersPage;
