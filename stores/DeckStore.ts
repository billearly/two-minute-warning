import { observable } from 'mobx';
import { mockPlayers, mockPlays } from '../data';
import { IPlayer, IPlay } from 'model';

export class DeckStore {
    @observable
    playerCards: IPlayer[] = mockPlayers;

    @observable
    playCards: IPlay[] = mockPlays;
}
