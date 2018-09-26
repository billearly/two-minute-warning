import styled from 'styled-components';
import CardBase from './CardBase';
import { IPlay } from '../../model';
import { ColorAccent } from './ColorAccent';

interface IProps {
    playInfo: IPlay;
    isInPlay?: boolean;
    handleClick?: (e: object) => void;
}

const PlayTitle = styled.p`
    font-weight: bold;
    margin-top: 0;
    position: relative;
    z-index: 1;
`;

const PlayDescription = styled.p`
    font-size: 0.8em;
    position: relative;
    z-index: 1;
`;

export const PlayCard: React.SFC<IProps> = ({
    playInfo,
    isInPlay,
    handleClick
}) => {
    return (
        <CardBase isInPlay={isInPlay} onClick={handleClick}>
            <PlayTitle data-target='play-title'>{playInfo.title}</PlayTitle>

            <PlayDescription data-target='play-type'>{playInfo.playType}</PlayDescription>
            <PlayDescription data-target='play-positions'>{playInfo.source} to {playInfo.target}</PlayDescription>
            <PlayDescription data-target='play-description'>{playInfo.description}</PlayDescription>
            <PlayDescription data-target='play-difficulty'>Difficulty: {playInfo.difficulty}</PlayDescription>

            <ColorAccent color='#E85558'/>
        </CardBase>
    );
};
