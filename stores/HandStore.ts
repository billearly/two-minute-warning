import { observable, action } from 'mobx'

//temp
import { IPlayer, IPlay } from '../model';
import { PlayerPosition }  from '../enum';


export class HandStore {
    @observable
    cards: IPlayer[] = [];

    @observable
    playCards: IPlay[] = [];

    @action
    addPlayCard = (playCard: IPlay): void => {
        if (playCard) {
            this.playCards.push(playCard);
        }
    }
}