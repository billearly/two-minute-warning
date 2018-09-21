import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { DeckStore, HandStore } from '../../stores';
import StoreTypes from '../../stores/StoreTypes';
import theme from '../theme/main';

interface IProps {
    DeckStore?: DeckStore;
    HandStore?: HandStore;
}

const StyledDeck = styled.button`
    height: 3rem;
    width: 12rem;

    position: absolute;
    right: 3rem;
    bottom: 0;

    color: white;
    text-align: center;
    background-color: ${theme.colorBlue};
    border: none;
    border-top-left-radius: ${theme.borderRadius};
    border-top-right-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};
`;

@inject(StoreTypes.DECKSTORE)
@inject(StoreTypes.HANDSTORE)
@observer
export class Deck extends Component<IProps> {
    constructor(props) {
        super(props);

        this.drawCard = this.drawCard.bind(this);
    }

    drawCard(): void {
        const drawnCard = this.props.DeckStore.drawCard();
        this.props.HandStore.addCard(drawnCard);
    }

    render() {
        return (
            <StyledDeck onClick={this.drawCard}>
                CARDS: {this.props.DeckStore.playCards.length + this.props.DeckStore.playerCards.length}
            </StyledDeck>
        );
    }
}