import { mount } from 'enzyme';
import { PlayerCard } from '../';
import { playerInfo } from './fixtures';

describe('The Player Card Component', () => {
    it('should display proper player information', () => {
        const component = mount(<PlayerCard playerInfo={playerInfo} />);

        expect(component.find('p[data-target="first-name"]').text()).toEqual('Test');
        expect(component.find('p[data-target="last-name"]').text()).toEqual('Player');
        expect(component.find('p[data-target="position"]').text()).toEqual('QB');
        expect(component.find('span[data-target="strength-value"]').text()).toEqual('1');
        expect(component.find('span[data-target="strength-label"]').text()).toEqual('Strength');
        expect(component.find('span[data-target="speed-value"]').text()).toEqual('2');
        expect(component.find('span[data-target="speed-label"]').text()).toEqual('Speed');
        expect(component.find('span[data-target="endurance-value"]').text()).toEqual('3');
        expect(component.find('span[data-target="endurance-label"]').text()).toEqual('Endurance');
    });

    it('should pass clickHandler onto the CardBase', () => {
        const component = mount(<PlayerCard playerInfo={playerInfo} handleClick={() => 'clicked'} />);

        expect(component.find('button').prop('onClick')()).toEqual('clicked');
    });
});