import React from 'react';
import styled from 'styled-components';
import { PlayerPosition } from '../../enum';
import CardBase from './CardBase';

interface ICardSlotProps {
    playerPosition: PlayerPosition
}

const StyledCardSlot = styled(CardBase)`
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CardSlotLabel = styled.span`
    text-align: center;
    color: ${props => props.theme.colorWhiteTransparent};

    margin: 0 auto;
    border: 1px solid ${props => props.theme.colorWhiteTransparent};
    border-radius: 0.2em;
    padding: 0.5em 1em;
`;

export const CardSlot: React.SFC<ICardSlotProps> = ({ playerPosition }) => {
    return (
        <StyledCardSlot>
            <CardSlotLabel>{playerPosition}</CardSlotLabel>
        </StyledCardSlot>
    );
};