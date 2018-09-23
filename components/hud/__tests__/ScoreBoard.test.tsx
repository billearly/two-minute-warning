import { mount } from 'enzyme';
import { ScoreBoard } from '../';
import { ScoreBoardStore } from '../../../stores';

const mockStore = new ScoreBoardStore();

describe('The Scoreboard Component', () => {
    it('should display game information from the store', () => {
        const scoreBoard = mount(<ScoreBoard ScoreBoardStore={mockStore} />);

        expect(scoreBoard.find('span[data-target="game-clock"]').text()).toEqual('---');
        expect(scoreBoard.find('span[data-target="score-home"]').text()).toEqual('14');
        expect(scoreBoard.find('span[data-target="score-away"]').text()).toEqual('6');
        expect(scoreBoard.find('span[data-target="current-down"]').text()).toEqual('1st and 10');
    });
});
