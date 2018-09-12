import styled from 'styled-components';
import CardBase from './CardBase';
import { IPlay } from '../../model';
import { ColorAccent } from './ColorAccent';

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

export const PlayCard: React.SFC<IPlay> = ({
    playType,
    source,
    target,
    title,
    description,
    difficulty
}) => {
    return (
        <CardBase>
            <PlayTitle>{title}</PlayTitle>

            <PlayDescription>{playType}</PlayDescription>
            <PlayDescription>{source} to {target}</PlayDescription>
            <PlayDescription>{description}</PlayDescription>
            <PlayDescription>Difficulty: {difficulty}</PlayDescription>

            <ColorAccent color='#E85558'/>
        </CardBase>
    );
};
