import { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { InPlayStore } from '../../stores';
import { PlayerPosition, Side } from '../../enum';
import { IPlayer, IPlay } from '../../model';
import { PlayerCard, PlayCard } from '../cards';
import { Slot } from './Slot';
import { TeamActions } from './TeamActions';
import { ActionButton } from './ActionButton';
import StoreTypes from '../../stores/StoreTypes';

interface IProps {
    InPlayStore?: InPlayStore;
    side: Side;
}

const Team = styled.div`
    display: flex;
`;

const TeamSideStyled = styled.div`
    height: 40%;
    width: 70%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &:first-child {
        justify-content: flex-end;
        border-bottom: 2px solid white;
    }
`;

@inject(StoreTypes.INPLAYSTORE)
@observer
export class TeamSide extends Component<IProps> {
    constructor(props) {
        super(props);

        if(this.props.side === Side.DEFENSE)

        this.generatePlayerCard = this.generatePlayerCard.bind(this);
        this.generatePlayCard = this.generatePlayCard.bind(this);
    }

    generateSide(side: Side): JSX.Element {
        switch (side) {
            case Side.OFFENSE:
                return (
                    <TeamSideStyled>
                        <Team>
                            {this.generateSlot(PlayerPosition.WR)}
                            {this.generateSlot(PlayerPosition.TE)}
                            {this.generateSlot(PlayerPosition.QB)}
                            {this.generateSlot(PlayerPosition.RB)}
                            {this.generateSlot(PlayerPosition.SR)}

                            <Slot label='PLAY'>
                                {this.generatePlayCard(this.props.InPlayStore.currentPlay)}
                            </Slot>
                        </Team>

                        <TeamActions>
                            <ActionButton onClick={() => { alert('hike!') }}>
                                Hike
                            </ActionButton>

                            <ActionButton onClick={() => { alert('timeout!') }}>
                                Timeout
                            </ActionButton>
                        </TeamActions>
                    </TeamSideStyled>
                );

            case Side.DEFENSE:
                return (
                    <TeamSideStyled>
                        <Team>
                            {this.generateSlot(PlayerPosition.CB)}
                            {this.generateSlot(PlayerPosition.LB)}
                            {this.generateSlot(PlayerPosition.DE)}
                            {this.generateSlot(PlayerPosition.DT)}
                            {this.generateSlot(PlayerPosition.S)}

                            <Slot label='PLAY'/>
                        </Team>
                    </TeamSideStyled>
                );

            default:
                throw new Error(`${side} is not a valid side value`);
        }
    }

    generateSlot(position: PlayerPosition): JSX.Element {
        return (
            <Slot label={position}>
                {this.generatePlayerCard(this.props.InPlayStore[position])}
            </Slot>
        );
    }

    generatePlayerCard(player: IPlayer): JSX.Element {
        if (player) {
            return (
                <PlayerCard
                    playerInfo={player}
                    isInPlay={true}
                />
            );
        }
    }

    generatePlayCard(play: IPlay): JSX.Element {
        if (play) {
            return (
                <PlayCard
                    playInfo={play}
                    isInPlay={true}
                />
            );
        }
    }s

    render() {
        return this.generateSide(this.props.side);
    }
}