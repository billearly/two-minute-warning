import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import GameBoard from '../components/GameBoard';
import { Store, initStore } from '../store';

interface IGameProps {
    store?: Store
}

export default class Game extends Component<IGameProps> {
    store = {}
    
    static getInitialProps ({ req }) {
        const isServer = !!req
        const store = initStore(isServer)
        return { selectedCardSlot: store.selectedCardSlot, isServer }
    }

    constructor(props){
        super(props);
        this.store = initStore(props.isServer);
    }

    render() {
        return (
            <Provider store={this.store}>
                <GameBoard />   
            </Provider>
        );
    }
};
