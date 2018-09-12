import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { DeckStore } from '../../stores';
import StoreTypes from '../../stores/StoreTypes';

interface IProps {
    DeckStore?: DeckStore
}

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

@inject(StoreTypes.DECKSTORE)
@observer
export class PlayCardDeck extends Component<IProps> {
    render() {
        return (
            <PlayCardDeckStyled>
                CARDS: {this.props.DeckStore.playCards.length + this.props.DeckStore.playerCards.length}
            </PlayCardDeckStyled>
        );
    }
}