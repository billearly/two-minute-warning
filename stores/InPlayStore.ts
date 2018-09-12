import { observable, action } from 'mobx'
import { IPlayer, IPlay } from '../model';
import { CardType, PlayerPosition } from '../enum';

export class InPlayStore {
    @observable
    qb: IPlayer;

    @observable
    rb: IPlayer;

    @observable
    wr: IPlayer;

    @observable
    te: IPlayer;

    @observable
    play: IPlay;

    @action
    addCard = (card: (IPlay|IPlayer)): void => {
        switch(card.cardType) {
            case CardType.PLAYER:
                this.assignToPlayerSlot(card as IPlayer);
                break;

            case CardType.PLAY:
                this.play = card as IPlay;
                break;

            default:
                throw new Error(`${card.cardType} is not a valid card type`);
        }
    }

    private assignToPlayerSlot (player: IPlayer): void {
        // this[player.position] = player; ???

        switch(player.position) {
            case PlayerPosition.QB:
                this.qb = player;
                break;

            case PlayerPosition.RB:
                this.rb = player;
                break;

            case PlayerPosition.WR:
                this.wr = player;
                break;

            case PlayerPosition.TE:
                this.te = player;
                break;

            default:
                throw new Error(`${player.position} is not a valid position`);
        }
    }
}