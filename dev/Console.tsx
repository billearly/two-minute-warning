import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { ScoreBoardStore } from '../stores';
import StoreTypes from '../stores/StoreTypes';

interface IProps {
    ScoreBoardStore?: ScoreBoardStore
}

interface IState {
    open: boolean;
}

const StyledConsole = styled.div`
    position: fixed;
    top: 0;
    right: 0;

    button {
        display: block;
    }
`;

@inject(StoreTypes.SCOREBOARD)
@observer
export default class Console extends Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render(){
        return (
            <StyledConsole>
                <button onClick={this.handleClick}>Dev Tools</button>

                {this.state.open &&
                    <div>
                        <button onClick={this.props.ScoreBoardStore.makeRandomDown}>Random Down</button>
                        <button onClick={this.props.ScoreBoardStore.resetDowns}>Reset Downs</button>
                        <button onClick={this.props.ScoreBoardStore.startGame}>Start Game</button>
                    </div>
                }
            </StyledConsole>
        );
    }
}