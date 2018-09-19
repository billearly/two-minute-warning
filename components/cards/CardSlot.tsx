import React from 'react';
import styled from 'styled-components';
import { PlayerPosition } from '../../enum';
import CardBase from './CardBase';
import theme from '../theme/main';

interface ICardSlotProps {
    playerPosition: PlayerPosition
}

const StyledCardSlot = styled(CardBase)`
    background-color: transparent;
    border: 1px dashed ${theme.colorBlackTransparent};
    box-shadow: none;
    padding: 0;
    overflow: visible;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: none;
        transform: none;
    }
`;

const CardSlotLabel = styled.span`
    text-align: center;
    color: ${theme.colorBlackTransparent};

    margin: 0 auto;
    padding: 0.5em 1em;

    border: 1px dashed ${theme.colorBlackTransparent};
    border-radius: 0.2em;
`;

export const CardSlot: React.SFC<ICardSlotProps> = ({ playerPosition, children }) => {
    return (
        <StyledCardSlot>
            {children || <CardSlotLabel>{playerPosition}</CardSlotLabel>}
        </StyledCardSlot>
    );
};