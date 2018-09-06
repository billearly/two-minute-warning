import styled from 'styled-components';

const CardBase = styled.div`
    font-family: sans-serif;
    font-size: 1em;
    background-color: white;
    display: inline-block;
    margin: 0.6em;
    padding: 0.9em;
    box-shadow: 0 0.06em 0.5em #888888;
    border-radius: ${props => props.theme.borderRadius};
    width: 7.5em;
    height: 11em;

    &:hover {
        box-shadow: 0 0.06em 0.5em #7AC9E8;
        cursor: pointer;
    }
`;

export default CardBase;