import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import GameBoard from '../components/GameBoard';
import * as stores from '../stores';
import { initStore } from '../stores/helpers';

interface IGameProps {
    isServer: boolean
}

const initAllStores = (stores: object, isServer: boolean): object => {
    let allStores = {};

    for (var store in stores) {
        if (Object.hasOwnProperty.call(stores, store)) {
            allStores[store] = initStore(store, isServer);
        }
    }

    return allStores;
}

export default class Game extends Component<IGameProps> {
    allStores = {};
    
    static getInitialProps ({ req }) {
        const isServer = !!req

        return {
            isServer: isServer
        }
    }

    constructor(props) {
        super(props);
        this.allStores = initAllStores(stores, this.props.isServer);
    }

    render() {
        return (
            <Provider {...this.allStores}>
                <GameBoard />   
            </Provider>
        );
    }
};
