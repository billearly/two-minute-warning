import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import StoreType from '../../stores/StoreTypes';
import { HandStore, DeckStore } from '../../stores';
import { PlayCard } from '../cards';

interface IProps {
    HandStore?: HandStore;
    DeckStore?: DeckStore;
}

const StyledHand = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    background-color: ${props => props.theme.colorBlue};

    overflow-x: auto;
`;

@inject(StoreType.HANDSTORE)
@inject(StoreType.DECKSTORE)
@observer
export class Hand extends Component<IProps> {
    constructor(props) {
        super(props);

        this.drawCardFromDeck = this.drawCardFromDeck.bind(this);
        this.renderPlayCards = this.renderPlayCards.bind(this);
    }

    drawCardFromDeck() {
        this.props.HandStore.addPlayCard(this.props.DeckStore.drawPlayCard());
    }

    renderPlayCards() {
        return this.props.HandStore.playCards.map((card, i) =>
            <PlayCard
                key={i}
                type={card.type}
                source={card.source}
                target={card.target}
                title={card.title}
                description={card.description}
                difficulty={card.difficulty}
            />
        );
    }

    render() {
        return (
            <StyledHand>
                {this.renderPlayCards()}
                <button onClick={this.drawCardFromDeck}>Draw Card</button>
            </StyledHand>
        );
    }
}