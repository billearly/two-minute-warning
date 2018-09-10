import StoreType from './StoreTypes';
import { ScoreBoardStore, DeckStore, HandStore } from './';

let scoreBoardStore = null;
let deckStore = null;
let handStore = null;

const getCachedStore = (store: string): object => {
    switch(store) {
        case StoreType.SCOREBOARD:
            if (scoreBoardStore === null) {
                scoreBoardStore = new ScoreBoardStore();
            }

            return scoreBoardStore;
        
        case StoreType.DECKSTORE:
            if (deckStore === null) {
                deckStore = new DeckStore();
            }

            return deckStore;

        case StoreType.HANDSTORE:
            if (handStore === null) {
                handStore = new HandStore();
            }

            return handStore;

        default:
            throw new Error(`${store} is not a defined store type`);
    }
}

const createNewStore = (store: string): object => {
    switch(store) {
        case StoreType.SCOREBOARD:
            return new ScoreBoardStore();

        case StoreType.DECKSTORE:
            return new DeckStore();

        case StoreType.HANDSTORE:
            return new HandStore();
        
        default:
            throw new Error(`${store} is not a defined store type`);
    }
}

export const initStore = (store: string, isServer: boolean): object => {
    return isServer
        ? createNewStore(store)
        : getCachedStore(store);
}