import { action, observable, computed } from 'mobx';
import { mockPlayers, mockPlays } from '../data';
import { IPlayer, IPlay } from '../model';

export class CardStore {
    @observable
    playerCards: IPlayer[] = mockPlayers;

    @observable
    playCards: IPlay[] = mockPlays;

    @observable
    test: number = 123;
}
