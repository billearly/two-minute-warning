import StoreType from './StoreTypes';
import { ScoreBoardStore, CardStore } from './';

let scoreBoardStore = null;
let playerDeckStore = null;

const getCachedStore = (store: string): object => {
    switch(store) {
        case StoreType.SCOREBOARD:
            if (scoreBoardStore === null) {
                scoreBoardStore = new ScoreBoardStore();
            }

            return scoreBoardStore;
        
        case StoreType.CARDSTORE:
            if (playerDeckStore === null) {
                playerDeckStore = new CardStore();
            }

            return playerDeckStore;

        default:
            throw new Error(`${store} is not a defined store type`);
    }
}

const createNewStore = (store: string): object => {
    switch(store) {
        case StoreType.SCOREBOARD:
            return new ScoreBoardStore();

        case StoreType.CARDSTORE:
            return new CardStore();
        
        default:
            throw new Error(`${store} is not a defined store type`);
    }
}

export const initStore = (store: string, isServer: boolean): object => {
    return isServer
        ? createNewStore(store)
        : getCachedStore(store);
}