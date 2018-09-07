import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { PlayerDeckStore } from '../../stores';

interface IProps {
    store?: PlayerDeckStore
}

@inject('store')
@observer
export class PlayerDeck extends Component<IProps> {
    static getInitialProps ({ req }): IProps {
        return {
            store: req.store
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <p>Player deck info</p>
                <p>Count: {this.props.store.getCardCount}</p>
                <p>Second Card: {this.props.store.getCard(1)}</p>
            </>
        );
    }
}