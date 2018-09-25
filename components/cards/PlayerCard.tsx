import React from 'react';
import styled from 'styled-components';
import { IPlayer } from '../../model';
import CardBase from './CardBase';
import { ColorAccent } from './ColorAccent';
import theme from '../theme/main';

interface IProps {
    playerInfo: IPlayer;
    isInPlay?: boolean;
    handleClick?: (e: object) => void;
}

interface IAttributeProps {
    increment: number
}

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

const PlayerName = styled.p`
    font-size: 1em;
    font-weight: bold;
    margin: 0;
    text-align: left;

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
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const PlayerAttribute = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.4rem;
`;

const AttributeLabel = styled.span`
    font-size: 0.7em;
    padding-left: 0.4rem;
`;

const AttributeIcon = styled.div`
    font-size: 0.8em;
    text-align: center;
    height: 1.5rem;
    width: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(45deg);

    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    border-top-color: ${(props: IAttributeProps) => props.increment > 0
        ? 'white'
        : theme.colorWhiteTransparent
    };
    border-right-color: ${(props: IAttributeProps) => props.increment > 1
        ? 'white'
        : theme.colorWhiteTransparent
    };
    border-bottom-color: ${(props: IAttributeProps) => props.increment > 2
        ? 'white'
        : theme.colorWhiteTransparent
    };
    border-left-color: ${(props: IAttributeProps) => props.increment > 3
        ? 'white'
        : theme.colorWhiteTransparent
    };
    border-color: ${(props: IAttributeProps) => props.increment > 4 && theme.colorGold};

    span {
        transform: rotate(-45deg);
        color: ${(props: IAttributeProps) => props.increment > 4
            ? theme.colorGold
            : 'white'
        };
    }
`;

const StyledPlayerCard = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const PlayerCard: React.SFC<IProps> = ({
    playerInfo,
    isInPlay,
    handleClick
}) => {
    return (
        <CardBase isInPlay={isInPlay} onClick={handleClick}>
            <StyledPlayerCard>
                <CardHeader>
                    <div>
                        <PlayerName data-target='first-name'>
                            {playerInfo.firstName}
                        </PlayerName>
                        
                        <PlayerName data-target='last-name'>
                            {playerInfo.lastName}
                        </PlayerName>
                    </div>
                    
                    <PlayerPos data-target='position'>{playerInfo.position}</PlayerPos>
                </CardHeader>

                <AttributeWrapper>
                    <PlayerAttribute>
                        <AttributeIcon 
                            increment={playerInfo.strength}
                            title={`Strength: ${playerInfo.strength}`}
                        >
                            <span data-target='strength-value'>
                                {playerInfo.strength}
                            </span>
                        </AttributeIcon>

                        <AttributeLabel data-target='strength-label'>
                            Strength
                        </AttributeLabel>
                    </PlayerAttribute>
                    
                    <PlayerAttribute>
                        <AttributeIcon
                            increment={playerInfo.speed}
                            title={`Speed: ${playerInfo.speed}`}
                        >
                            <span data-target='speed-value'>
                                {playerInfo.speed}
                            </span>
                        </AttributeIcon>

                        <AttributeLabel data-target='speed-label'>
                            Speed
                        </AttributeLabel>
                    </PlayerAttribute>
                    
                    <PlayerAttribute>
                        <AttributeIcon
                            increment={playerInfo.endurance}
                            title={`Endurance: ${playerInfo.endurance}`}
                        >
                            <span data-target='endurance-value'>
                                {playerInfo.endurance}
                            </span>
                        </AttributeIcon>

                        <AttributeLabel data-target='endurance-label'>
                            Endurance
                        </AttributeLabel>
                    </PlayerAttribute>
                </AttributeWrapper>

                <ColorAccent color='#3EBDE8'/>
            </StyledPlayerCard>
        </CardBase>
    );
}
