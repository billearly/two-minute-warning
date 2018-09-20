import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import StoreType from '../../stores/StoreTypes';
import { HandStore, DeckStore, InPlayStore } from '../../stores';
import { PlayerCard, PlayCard } from '../cards';
import { IPlay, IPlayer } from 'model';
import { CardType } from '../../enum';
import theme from '../theme/main';

interface IProps {
    HandStore?: HandStore;
    DeckStore?: DeckStore;
    InPlayStore?: InPlayStore;
}

const StyledHand = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.colorBlue};
`;

@inject(StoreType.HANDSTORE)
@inject(StoreType.DECKSTORE)
@inject(StoreType.INPLAYSTORE)
@observer
export class Hand extends Component<IProps> {
    constructor(props) {
        super(props);

        this.drawCardFromDeck = this.drawCardFromDeck.bind(this);
        this.renderCards = this.renderCards.bind(this);
        this.generatePlayCard = this.generatePlayCard.bind(this);
        this.generatePlayerCard = this.generatePlayerCard.bind(this);
    }

    drawCardFromDeck(): void {
        const drawnCard = this.props.DeckStore.drawCard();
        this.props.HandStore.addCard(drawnCard);
    }

    addCardToTeam(player: IPlayer): void {
        this.props.InPlayStore.addCard(player);
        this.props.HandStore.removeCard(player);
    }

    generatePlayCard(play: IPlay, index: number): JSX.Element {
        return (
            <PlayCard
                key={index}
                id={play.id}
                cardType={play.cardType}
                playType={play.playType}
                source={play.source}
                target={play.target}
                title={play.title}
                description={play.description}
                difficulty={play.difficulty}
            />
        );
    }

    generatePlayerCard(player: IPlayer, index: number): JSX.Element {
        return (
            <PlayerCard
                key={index}
                playerInfo={player}
                handleClick={() => this.addCardToTeam(player)}
            />
        );
    }

    renderCards(): JSX.Element[] {
        return this.props.HandStore.cards.map((card, i) => {
            switch(card.cardType) {
                case CardType.PLAY:
                    return this.generatePlayCard(card as IPlay, i);

                case CardType.PLAYER:
                    return this.generatePlayerCard(card as IPlayer, i);
            }
        });
    }

    render() {
        return (
            <StyledHand>
                {this.renderCards()}
                <button onClick={this.drawCardFromDeck}>Draw Card</button>
            </StyledHand>
        );
    }
}