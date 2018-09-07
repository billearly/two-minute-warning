import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import GameBoard from '../components/GameBoard';
import * as stores from '../stores';
import { initStore } from '../stores/helpers';

export default class Game extends Component {
    allStores = {};
    
    static getInitialProps ({ req }) {
        const isServer = !!req
        const allStores = {};
        
        for (var store in stores) {
            if (Object.hasOwnProperty.call(stores, store)) {
                allStores[store] = initStore(store, isServer);
            }
        }
    }

    constructor(props){
        super(props);

        for (var store in stores) {
            if (Object.hasOwnProperty.call(stores, store)) {
                this.allStores[store] = initStore(store, props.isServer);
            }
        }
    }

    render() {
        return (
            <Provider {...this.allStores}>
                <GameBoard />   
            </Provider>
        );
    }
};
