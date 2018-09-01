import styled from 'styled-components';

const CardBase = styled.div`
    font-family: sans-serif;
    font-size: 1em;
    background-color: white;
    display: inline-block;
    margin: 0.6em;
    padding: 0.9em;
    box-shadow: 0 0.06em 0.5em #888888;
    border-radius: 0.2em;
    width: 11em;
    height: 16em;

    &:hover {
        box-shadow: 0 0.06em 0.5em #7AC9E8;
        cursor: pointer;
    }
`;

export default CardBase;