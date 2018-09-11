import React, { Component } from 'react';
import styled from 'styled-components';
import { IPlayer } from '../../model';
import CardBase from './CardBase';

interface IProps {
    playerInfo: IPlayer
}

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 0 1.5em;
    border-bottom: 0.06em solid lightgray;
`;

const PlayerName = styled.p`
    font-size: 1em;
    font-weight: bold;
    margin: 0;

    &:last-child {
        padding-top: 0.3em;
    }
`;

const PlayerPos = styled.p`
    font-size: 0.8em;
    font-weight: bold;
    margin: 0;
`;

const AttributeWrapper = styled.div`
    padding-top: 0.3em;
`;

const PlayerAttribute = styled.p`
    font-size: 0.7em;
    text-align: center;
`;

export class PlayerCard extends Component<IProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CardBase>
                <CardHeader>
                    <div>
                        <PlayerName>{this.props.playerInfo.firstName}</PlayerName>
                        <PlayerName>{this.props.playerInfo.lastName}</PlayerName>
                    </div>
                    
                    <PlayerPos>{this.props.playerInfo.position}</PlayerPos>
                </CardHeader>
    
                <AttributeWrapper>
                    <PlayerAttribute>Strength: {this.props.playerInfo.strength}</PlayerAttribute>
                    <PlayerAttribute>Speed: {this.props.playerInfo.speed}</PlayerAttribute>
                    <PlayerAttribute>Endurance: {this.props.playerInfo.endurance}</PlayerAttribute>
                </AttributeWrapper>
            </CardBase>
        );
    }
}
