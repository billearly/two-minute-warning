import { observable, action } from 'mobx';
import { mockPlayers, mockPlays } from '../data';
import { IPlayer, IPlay } from 'model';

export class DeckStore {
    @observable
    playerCards: IPlayer[] = mockPlayers;

    @observable
    playCards: IPlay[] = mockPlays;

    @action
    drawCard = (): IPlayer | IPlay => {
        const flip = Math.floor(Math.random() * 2);

        if (flip === 1) {
            return this.drawPlayCard() || this.drawPlayerCard();
        } else {
            return this.drawPlayerCard() || this.drawPlayCard();
        }
    }

    private drawPlayerCard = (): IPlayer => {
        if (this.playerCards.length > 0) {
            const randomNum = Math.floor(Math.random() * this.playerCards.length);
            const drawnCard = this.playerCards.splice(randomNum, 1);
    
            return drawnCard[0];
        }
        
        return null;
    }

    private drawPlayCard = (): IPlay => {
        if (this.playCards.length > 0) {
            const randomNum = Math.floor(Math.random() * this.playCards.length);
            const drawnCard = this.playCards.splice(randomNum, 1);
    
            return drawnCard[0];
        }
        
        return null;
    }

}
