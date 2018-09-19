import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { DeckStore } from '../../stores';
import StoreTypes from '../../stores/StoreTypes';
import theme from '../theme/main';

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
    background-color: ${theme.colorBlue};
    border-top-left-radius: ${theme.borderRadius};
    border-top-right-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};

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