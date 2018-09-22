import { mount } from 'enzyme';
import { LoginSkip } from '../';

describe('The Login Skip Component', () => {
    it('should display a message', () => {
        const component = mount(<LoginSkip />);
        expect(component.find('div').text()).toEqual('Or jump into a quick game');
    });

    it('should have a link that goes to /game', () => {
        const component = mount(<LoginSkip />);
        expect(component.find('a').prop('href')).toEqual('/game');
    });
});
