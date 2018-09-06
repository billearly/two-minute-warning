import { action, observable, computed } from 'mobx';

let cachedStore = null;

export class ScoreBoardStore {
    @observable 
    down: number = 1;

    @observable
    yardsToGo: number = 10;

    @observable
    homeScore: number = 14;

    @observable
    awayScore: number = 6;

    @computed
    get getCurrentDown (): string {
        let decorator: string = '';

        switch(this.down) {
            case 1:
                decorator = 'st';
                break;
            case 2:
                decorator = 'nd';
                break;
            case 3:
                decorator = 'rd';
                break;
            case 4:
                decorator = 'th';
                break;
        }

        return `${this.down}${decorator} and ${this.yardsToGo}`;
    }

    @computed
    get getScore (): string {
        return `${this.homeScore} - ${this.awayScore}`;
    }

    @action
    resetDowns = (): void => {
        this.down = 1;
        this.yardsToGo = 10;
    }

    @action
    makeRandomDown = (): void => {
        this.down = Math.floor(Math.random() * 4) + 1;
        this.yardsToGo = Math.floor(Math.random() * 30) + 1;
    }
}

const getCachedStore = (): ScoreBoardStore => {
    if (cachedStore === null) {
        cachedStore = new ScoreBoardStore();
    }

    return cachedStore;
}

export const initStore = (isServer): ScoreBoardStore => {
    return isServer
        ? new ScoreBoardStore()
        : getCachedStore();
}