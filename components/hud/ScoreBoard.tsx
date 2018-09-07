import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { ScoreBoardStore, PlayerDeckStore } from '../../stores';

interface IProps {
    ScoreBoardStore: ScoreBoardStore,
    PlayerDeckStore: PlayerDeckStore
}

const StyledScoreBoard = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    height: 2.5rem;
    width: 30rem;
    padding: 0.5rem;
    margin-top: 1rem;
    border-radius: ${props => props.theme.borderRadius};
`;

const ScoreboardSection = styled.span`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% / 3);
    height: 100%;
    border-right: 1px solid lightgray;
    text-align: center;
    font-weight: bold;

    &:last-child {
        border-right: none;
    }
`;

@inject('ScoreBoardStore')
@inject('PlayerDeckStore')
@observer
export class ScoreBoard extends Component<IProps> {
    render() {
        return (
            <StyledScoreBoard>
                <ScoreboardSection>{this.props.ScoreBoardStore.getScore}</ScoreboardSection>
                <ScoreboardSection>1:56</ScoreboardSection>
                <ScoreboardSection>{this.props.ScoreBoardStore.getCurrentDown}</ScoreboardSection>

                <button onClick={this.props.ScoreBoardStore.makeRandomDown}>Random Down</button>
                <button onClick={this.props.ScoreBoardStore.resetDowns}>Reset Downs</button>

                <span>{this.props.PlayerDeckStore.getCardCount}</span>
            </StyledScoreBoard>
        );
    }
}