import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import StoreType from '../../stores/StoreTypes';
import { HandStore } from '../../stores';

// Temporary
import { PlayerCard } from '../cards';

interface IProps {
    HandStore?: HandStore;
}

const StyledHand = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    background-color: ${props => props.theme.colorBlue};

    overflow-x: auto;
`;

@inject(StoreType.HANDSTORE)
@observer
export class Hand extends Component<IProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledHand>
                {this.props.HandStore.cards.map((card, i) => 
                    <PlayerCard
                        key={i}
                        playerInfo={card}
                    />
                )}
            </StyledHand>
        );
    }
}