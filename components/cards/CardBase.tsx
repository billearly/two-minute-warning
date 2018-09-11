import styled from 'styled-components';

const CardBase = styled.div`
    font-family: sans-serif;
    font-size: 1em;
    background-color: white;
    display: inline-block;
    margin: 0.6em;
    padding: 0.9em;
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    width: 7.5em;
    height: 11em;
    position: relative;
    overflow: hidden;

    &:hover {
        box-shadow: 0 0.06em 0.9em 0.4em #737373;
        transform: translateY(-0.3rem);
        cursor: pointer;
    }

    transition: box-shadow ${props => props.theme.quickTransition};
`;

export default CardBase;