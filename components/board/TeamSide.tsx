import { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { InPlayStore } from '../../stores';
import { PlayerPosition, Side } from '../../enum';
import { IPlayer } from '../../model';
import { PlayerCard } from '../cards';
import { Slot } from './Slot'
import StoreTypes from '../../stores/StoreTypes';

interface IProps {
    InPlayStore?: InPlayStore;
    side: Side;
}

const TeamSideStyled = styled.div`
    display: flex;
    justify-content: center;
    height: 50%;
    width: 70%;
    margin: 0 auto;

    &:first-child {
        align-items: flex-end;
        border-bottom: 2px solid white;
    }
`;

@inject(StoreTypes.INPLAYSTORE)
@observer
export class TeamSide extends Component<IProps> {
    constructor(props) {
        super(props);

        if(this.props.side === Side.DEFENSE)

        this.generateCard = this.generateCard.bind(this);
    }

    generateSide(side: Side): JSX.Element {
        switch (side) {
            case Side.OFFENSE:
                return (
                    <TeamSideStyled>
                        {this.generateSlot(PlayerPosition.WR)}
                        {this.generateSlot(PlayerPosition.TE)}
                        {this.generateSlot(PlayerPosition.QB)}
                        {this.generateSlot(PlayerPosition.RB)}
                        {this.generateSlot(PlayerPosition.SR)}
                    </TeamSideStyled>
                );

            case Side.DEFENSE:
                return (
                    <TeamSideStyled>
                        {this.generateSlot(PlayerPosition.CB)}
                        {this.generateSlot(PlayerPosition.LB)}
                        {this.generateSlot(PlayerPosition.DE)}
                        {this.generateSlot(PlayerPosition.DT)}
                        {this.generateSlot(PlayerPosition.S)}
                    </TeamSideStyled>
                );

            default:
                throw new Error(`${side} is not a valid side value`);
        }
    }

    generateSlot(position: PlayerPosition): JSX.Element {
        return (
            <Slot playerPosition={position}>
                {this.generateCard(this.props.InPlayStore[position])}
            </Slot>
        );
    }

    generateCard(player: IPlayer): JSX.Element {
        if (player) {
            return (
                <PlayerCard
                    playerInfo={player}
                    isInPlay={true}
                />
            );
        }
    }

    render() {
        return this.generateSide(this.props.side);
    }
}