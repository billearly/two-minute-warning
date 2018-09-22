import { mount } from 'enzyme';
import { PlayerCard } from '../';
import { playerInfo } from './fixtures';

describe('The Player Card Component', () => {
    it('should display proper player information', () => {
        const component = mount(<PlayerCard playerInfo={playerInfo} />);

        expect(component.find('p[data-target="first-name"]').text()).toEqual('Test');
        expect(component.find('p[data-target="last-name"]').text()).toEqual('Player');
        expect(component.find('p[data-target="position"]').text()).toEqual('QB');
        expect(component.find('p[data-target="speed"]').text()).toEqual('Strength: 1');
        expect(component.find('p[data-target="strength"]').text()).toEqual('Speed: 2');
        expect(component.find('p[data-target="endurance"]').text()).toEqual('Endurance: 3');
    });

    it('should pass clickHandler onto the CardBase', () => {
        const component = mount(<PlayerCard playerInfo={playerInfo} handleClick={() => 'clicked'} />);

        expect(component.find('button').prop('onClick')()).toEqual('clicked');
    });
});