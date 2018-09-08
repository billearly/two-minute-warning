import { action, observable, computed } from 'mobx';

export class CardStore {
    @observable
    playAreaVisible: boolean = false;

    @observable
    cards: string[] = [
        'ksd-dfjvkj0-cdskl',
        'nsfg-jkdn-dsv-vfd',
        'kllkm0v9lkmv-skbv'
    ];

    @computed
    get getCardCount (): number {
        return this.cards.length;
    }

    @action
    getCard = (index: number): string => {
        return this.cards[index];
    }

    @action
    togglePlayAreaVisibility = (visibility: boolean): void => {
        this.playAreaVisible = visibility;
    }
}
