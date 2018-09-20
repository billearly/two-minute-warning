import { observable, action } from 'mobx'
import { IPlayer, IPlay } from '../model';


export class HandStore {
    @observable
    playCards: IPlay[] = [];

    @observable
    cards: (IPlay|IPlayer)[] = [];

    @action
    addCard = (card: (IPlay|IPlayer)): void => {
        if (card) {
            this.cards.push(card);
        }
    }

    @action
    removeCard = (card: (IPlay|IPlayer)): void => {
        if (card) {
            // need to figure out the index of the card
            for (var i = 0; i < this.cards.length; i++) {
                if (card.id === this.cards[i].id) {
                    this.cards.splice(i, 1);
                    break;
                }
            }
        }
    }
}

/*
Unresolved issues:
- Both TeamSides are offense
- Need to do something with the Draw Card button
*/