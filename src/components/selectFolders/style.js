import styled from 'styled-components';

import { LIGT_GRAY, DARK_GRAY } from '../../styles-globals/colors';

export const SelectFoldersStyled = styled.section`
    overflow-x: scroll;

    .item:nth-child(even) {
        background-color: ${DARK_GRAY};
    }
    
    .item {
        margin: 0;
        font-size: 14px;
        padding: 4px;
        transition: .1s background-color ease-in-out;

        &:hover {
            background-color: ${LIGT_GRAY};
            color: black;
        }
    }
`;