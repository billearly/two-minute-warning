import styled from 'styled-components';
import CardBase from './CardBase';
import {
    PlayerPosition,
    PlayType
} from '../../enum';

interface IPlayInfo {
    type: PlayType,
    source: PlayerPosition,
    target: PlayerPosition,
    title: string,
    description: string,
    difficulty: number
}

const PlayTitle = styled.p`
    color: white;

    font-weight: bold;
    margin-top: 0;
    position: relative;
    z-index: 1;
`;

const PlayDescription = styled.p`
    color: white;
    font-size: 0.8em;
    
    position: relative;
    z-index: 1;
`;

const ColorAccent = styled.div`
    background-color: #E85558;
    height: 80%;
    width: 150%;

    position: absolute;
    bottom: -15%;
    left: -30%;

    transform: rotate(12deg);

    &:first-of-type {
        background-color: gray;
        bottom: 30%;
    }
`;

export const PlayCard: React.SFC<IPlayInfo> = ({
    type,
    source,
    target,
    title,
    description,
    difficulty
}) => {
    return (
        <CardBase>
            <PlayTitle>{title}</PlayTitle>

            <PlayDescription>{type}</PlayDescription>
            <PlayDescription>{source} to {target}</PlayDescription>
            <PlayDescription>{description}</PlayDescription>
            <PlayDescription>Difficulty: {difficulty}</PlayDescription>

            <ColorAccent />
            <ColorAccent />
        </CardBase>
    );
};