import { IPlay } from 'model';
import { PlayerPosition, CardType, PlayType } from '../../../../enum';

export const playInfo: IPlay = {
    id: '123',
    cardType: CardType.PLAYER,
    playType: PlayType.PASS,
    title: 'Play Title',
    description: 'Play Description',
    source: PlayerPosition.QB,
    target: PlayerPosition.WR,
    difficulty: 5
};