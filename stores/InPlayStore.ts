import { observable, action } from 'mobx'
import { IPlayer, IPlay } from '../model';
import { CardType } from '../enum';

export class InPlayStore {
    @observable
    QB: IPlayer;

    @observable
    RB: IPlayer;

    @observable
    WR: IPlayer;

    @observable
    SR: IPlayer;

    @observable
    TE: IPlayer;

    @observable
    CB: IPlayer;

    @observable
    DE: IPlayer;

    @observable
    DT: IPlayer;

    @observable
    LB: IPlayer;

    @observable
    S: IPlayer;

    @observable
    currentPlay: IPlay;

    @action
    addCard = (card: (IPlay|IPlayer)): void => {
        switch(card.cardType) {
            case CardType.PLAYER:
                this.assignToPlayerSlot(card as IPlayer);
                break;

            case CardType.PLAY:
                this.currentPlay = card as IPlay;
                break;

            default:
                throw new Error(`${card.cardType} is not a valid card type`);
        }
    }

    private assignToPlayerSlot (player: IPlayer): void {
        this[player.position] = player;
    }
}
