import React from 'react';
import styled from 'styled-components';

const PlayCardDeckStyled = styled.div`
    height: 3rem;
    width: 12rem;
    padding-top: 1rem;

    position: absolute;
    right: 3rem;
    bottom: 0;

    color: white;
    text-align: center;
    background-color: ${props => props.theme.colorBlue};
    border-top-left-radius: ${props => props.theme.borderRadius};
    border-top-right-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};

    pointer-events: none;
`;

export const PlayCardDeck: React.SFC = () => {
    return (
        <PlayCardDeckStyled>
            PLAY CARDS
        </PlayCardDeckStyled>
    );
}