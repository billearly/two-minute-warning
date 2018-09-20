import { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { InPlayStore } from '../../stores';
import { PlayerPosition } from '../../enum';
import { IPlayer } from '../../model';
import { PlayerCard } from '../cards';
import { CardSlot } from '../cards'
import StoreTypes from '../../stores/StoreTypes';

interface IProps {
    InPlayStore?: InPlayStore;
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

        this.generateCard = this.generateCard.bind(this);
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
        return (
            <TeamSideStyled>
                <CardSlot playerPosition={PlayerPosition.WR}>
                    {this.generateCard(this.props.InPlayStore.wr)}
                </CardSlot>

                <CardSlot playerPosition={PlayerPosition.TE}>
                    {this.generateCard(this.props.InPlayStore.te)}
                </CardSlot>
                
                <CardSlot playerPosition={PlayerPosition.QB}>
                    {this.generateCard(this.props.InPlayStore.qb)}
                </CardSlot>
                
                <CardSlot playerPosition={PlayerPosition.RB}>
                    {this.generateCard(this.props.InPlayStore.rb)}
                </CardSlot>

                <CardSlot playerPosition={PlayerPosition.SR}>
                    {this.generateCard(this.props.InPlayStore.sr)}
                </CardSlot>
            </TeamSideStyled>
        );
    }
}