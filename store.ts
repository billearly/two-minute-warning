import { action, observable } from 'mobx';

let cachedStore = null;

export class Store {
    @observable 
    selectedCardSlot: string = 'n/a';

    @action
    updateSelection = (newSelection: string) => {
        this.selectedCardSlot = newSelection;
    }
}

export const initStore = (isServer) => {
    if (isServer) {
        return new Store();
    } else {
        if (cachedStore === null) {
            cachedStore = new Store();
        }
    }
    return cachedStore;
}