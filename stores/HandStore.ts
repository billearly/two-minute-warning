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
}