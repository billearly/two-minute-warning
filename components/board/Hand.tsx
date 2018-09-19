import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import StoreType from '../../stores/StoreTypes';
import { HandStore, DeckStore, InPlayStore } from '../../stores';
import { PlayerCard, PlayCard } from '../cards';
import { IPlay, IPlayer } from 'model';
import { CardType, PlayerPosition } from '../../enum';
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

    generatePlayCard(play: IPlay, index: number): JSX.Element {
        return (
            <PlayCard
                key={index}
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

    addCardToTeam(position: PlayerPosition): void {
        //temp...maybe
        for (var i = 0; i < this.props.HandStore.cards.length; i++) {
            var card = this.props.HandStore.cards[i];
            if (card.cardType === CardType.PLAYER) {
                const playerCard = card as IPlayer;

                if (playerCard.position === position) {
                    // the magic. Not actually removing the card from HandStore yet
                    this.props.InPlayStore.addCard(playerCard);
                    break;
                }
            }
        }
    }

    generatePlayerCard(player: IPlayer, index: number): JSX.Element {
        return (
            <PlayerCard
                key={index}
                playerInfo={player}
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
                <button onClick={() => this.addCardToTeam(PlayerPosition.QB)}>Play Card</button>
            </StyledHand>
        );
    }
}