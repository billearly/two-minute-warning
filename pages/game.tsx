import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import GameBoard from '../components/GameBoard';
import { ScoreBoardStore, initStore } from '../stores';

interface IGameProps {
    store?: ScoreBoardStore
}

export default class Game extends Component<IGameProps> {
    store = {}
    
    static getInitialProps ({ req }) {
        const isServer = !!req
        const store = initStore(isServer)
        
        return {
            down: store.down,
            yardsToGo: store.yardsToGo,
            isServer
        }
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
