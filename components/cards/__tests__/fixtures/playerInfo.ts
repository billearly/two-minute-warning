import { IPlayer } from 'model';
import { PlayerPosition, CardType } from '../../../../enum';

export const playerInfo: IPlayer = {
    id: '123',
    cardType: CardType.PLAYER,
    firstName: 'Test',
    lastName: 'Player',
    position: PlayerPosition.QB,
    strength: 1,
    speed: 2,
    endurance: 3
};