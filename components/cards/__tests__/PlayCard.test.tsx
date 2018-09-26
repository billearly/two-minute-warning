import { mount } from 'enzyme';
import { PlayCard } from '../';
import { playInfo } from './fixtures';

describe('The Play Card Component', () => {
    it('should display proper play information', () => {
        const component = mount(<PlayCard playInfo={playInfo} />);

        expect(component.find('p[data-target="play-title"]').text()).toEqual('Play Title');
        expect(component.find('p[data-target="play-type"]').text()).toEqual('PASS');
        expect(component.find('p[data-target="play-positions"]').text()).toEqual('QB to WR');
        expect(component.find('p[data-target="play-description"]').text()).toEqual('Play Description');
        expect(component.find('p[data-target="play-difficulty"]').text()).toEqual('Difficulty: 5');
    });

    it('should pass clickHandler onto the CardBase', () => {
        const component = mount(<PlayCard playInfo={playInfo} handleClick={() => 'clicked'} />);

        expect(component.find('button').prop('onClick')()).toEqual('clicked');
    });
});