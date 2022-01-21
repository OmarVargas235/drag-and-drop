import styled from 'styled-components';

import { DARKGRAY } from '../../styles-globals/colors';

export const Section = styled.section`
    background-color: ${DARKGRAY};
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
`;

export const FolderStyle = styled.div`
    background-color: white;
    border: solid 1px white;
    border-radius: 4px;
    width: 150px;
    height: 60px;
    margin: 10px;
    display: grid;
    grid-template-rows: 1fr 2fr;
    font-weight: bold;

    .text-center {
        text-align: center;
    }

    .text-uppercase {
        text-transform: uppercase;
    }

    .body {
        background-color: darkgray;
        color: white;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;