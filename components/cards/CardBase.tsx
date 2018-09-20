import styled from 'styled-components';
import theme from '../theme/main';

interface IProps {
    isInPlay?: boolean;
}

const CardBase = styled.button`
    color: white;
    font-family: sans-serif;
    font-size: 1em;
    background-color: gray;
    display: inline-block;
    margin: ${(props: IProps) => props.isInPlay ? '0' : theme.cardMargin};
    padding: 0.9em;
    box-shadow: ${theme.boxShadow};
    border-radius: ${theme.borderRadius};
    border: none;
    width: ${theme.cardWidth};
    height: ${theme.cardHeight};
    position: relative;
    overflow: hidden;

    &:hover {
        box-shadow: 0 0.06em 0.9em 0.4em #737373;
        transform: translateY(-0.3rem);
        cursor: pointer;
    }

    transition: box-shadow ${theme.quickTransition};
`;

CardBase.defaultProps = {
    isInPlay: false
}

export default CardBase;
