import { IPlayer } from '../model';
import { PlayerPosition, CardType } from '../enum';

export const mockPlayers: IPlayer[] = [
    {
        cardType: CardType.PLAYER,
        firstName: 'Bill',
        lastName: 'Early',
        position: PlayerPosition.QB,
        strength: 10.0,
        speed: 10.0,
        endurance: 10.0
    },
    {
        cardType: CardType.PLAYER,
        firstName: 'Greg',
        lastName: 'Pease',
        position: PlayerPosition.WR,
        strength: 7.2,
        speed: 8.3,
        endurance: 9.4
    },
    {
        cardType: CardType.PLAYER,
        firstName: 'Kevin',
        lastName: 'Lee',
        position: PlayerPosition.TE,
        strength: 9.5,
        speed: 7.1,
        endurance: 6.5
    },
    {
        cardType: CardType.PLAYER,
        firstName: 'Chris',
        lastName: 'Adley',
        position: PlayerPosition.RB,
        strength: 9.8,
        speed: 6.4,
        endurance: 7.8
    }
];
