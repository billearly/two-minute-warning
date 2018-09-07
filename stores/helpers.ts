import StoreType from './StoreTypes';
import { ScoreBoardStore, PlayerDeckStore } from './';

let scoreBoardStore = null;
let playerDeckStore = null;

const getCachedStore = (store: string): object => {
    switch(store) {
        case StoreType.SCOREBOARD:
            if (scoreBoardStore === null) {
                scoreBoardStore = new ScoreBoardStore();
            }

            return scoreBoardStore;
        
        case StoreType.PLAYERDECK:
            if (playerDeckStore === null) {
                playerDeckStore = new PlayerDeckStore();
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

        case StoreType.PLAYERDECK:
            return new PlayerDeckStore();
        
        default:
            throw new Error(`${store} is not a defined store type`);
    }
}

export const initStore = (store: string, isServer: boolean): object => {
    return isServer
        ? createNewStore(store)
        : getCachedStore(store);
}