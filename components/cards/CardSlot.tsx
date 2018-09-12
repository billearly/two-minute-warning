import React from 'react';
import styled from 'styled-components';
import { PlayerPosition } from '../../enum';
import CardBase from './CardBase';

interface ICardSlotProps {
    playerPosition: PlayerPosition
}

const StyledCardSlot = styled(CardBase)`
    background-color: transparent;
    border: 1px dashed ${props => props.theme.colorBlackTransparent};
    box-shadow: none;

    display: flex;
    flex-direction: column;
    justify-content: center;

    &:hover {
        box-shadow: none;
        transform: none;
    }
`;

const CardSlotLabel = styled.span`
    text-align: center;
    color: ${props => props.theme.colorBlackTransparent};

    margin: 0 auto;
    padding: 0.5em 1em;

    border: 1px dashed ${props => props.theme.colorBlackTransparent};
    border-radius: 0.2em;
`;

export const CardSlot: React.SFC<ICardSlotProps> = ({ playerPosition, children }) => {
    return (
        <StyledCardSlot>
            <CardSlotLabel>{playerPosition}</CardSlotLabel>
            {children}
        </StyledCardSlot>
    );
};