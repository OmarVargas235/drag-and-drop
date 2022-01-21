import react from 'React';

import { SelectFoldersStyled } from './style';

interface IProps {
    names: string[] | undefined;
}

const SelectFoldersPage = ({ names }: IProps): JSX.Element => (
    <SelectFoldersStyled>
        {
            names?.map((name, index) => (
                <p
                    key={index}
                    className='item'
                >{name}</p>
            ))
        }
    </SelectFoldersStyled>
)

export default SelectFoldersPage;
