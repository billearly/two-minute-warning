import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { CardStore } from '../../stores';
import StoreTypes from '../../stores/StoreTypes';

interface IProps {
    CardStore?: CardStore
}

@inject(StoreTypes.CARDSTORE)
@observer
export class PlayerDeck extends Component<IProps> {
    render() {
        return (
            <>
                <p>Player deck info</p>
                <p>Count: {this.props.CardStore.getCardCount}</p>
                <p>Second Card: {this.props.CardStore.getCard(1)}</p>
            </>
        );
    }
}