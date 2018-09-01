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

const PlayTitle = styled.h3`
    text-align: center;
    font-weight: bold;
`;

const PlayDescription = styled.p`
    text-align: center;
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

            <PlayDescription>{description}</PlayDescription>
            <PlayDescription>{type}</PlayDescription>
            <PlayDescription>{source} to {target}</PlayDescription>
            <PlayDescription>Difficulty: {difficulty}</PlayDescription>
        </CardBase>
    );
};