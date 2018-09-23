import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { ScoreBoardStore } from '../../stores';
import StoreTypes from '../../stores/StoreTypes';
import theme from '../theme/main';

interface IProps {
    ScoreBoardStore?: ScoreBoardStore
}

const StyledScoreBoard = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
`;

const GameData = styled.div`
    width: 9rem;
    height: 2rem;
    background-color: white;
    box-shadow: ${theme.boxShadow};

    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
        border-bottom-left-radius: ${theme.borderRadius};
    }

    &:last-child {
        border-bottom-right-radius: ${theme.borderRadius};
    }
`;

const Scores = styled.div`
    background-color: white;
    box-shadow: ${theme.boxShadow};
    border-bottom-left-radius: ${theme.borderRadius};
    border-bottom-right-radius: ${theme.borderRadius};

    display: flex;
    overflow: hidden;
    z-index: 5;
`;

const TeamScore = styled.p`
    padding: 0.9rem;
    margin: 0;
    width: 5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:first-child {
        border-right: 1px solid lightgray;
    }

    span {
        &:first-child {
            font-size: 0.75em;
            padding-bottom: 0.2rem;
        }

        &:last-child {
            font-size: 1.5em;
        }
    }
`;

@inject(StoreTypes.SCOREBOARD)
@observer
export class ScoreBoard extends Component<IProps> {
    render() {
        return (
            <StyledScoreBoard>
                <GameData>
                    {this.props.ScoreBoardStore.getTimeLeft}
                </GameData>

                <Scores>
                    <TeamScore>
                        <span>NE</span>
                        <span>{this.props.ScoreBoardStore.homeScore}</span>
                    </TeamScore>

                    <TeamScore>
                        <span>CAR</span>
                        <span>{this.props.ScoreBoardStore.awayScore}</span>
                    </TeamScore>
                </Scores>

                <GameData>
                    {this.props.ScoreBoardStore.getCurrentDown}
                </GameData>
            </StyledScoreBoard>
        );
    }
}