import { mount } from 'enzyme';
import { Login } from '../';

describe('The Login Component', () => {
    it('should display a proper title', () => {
        const component = mount(<Login />);
        expect(component.find('h2').text()).toEqual('Sign In');
    });

    it('should display a description', () => {
        const component = mount(<Login />);
        expect(component.find('p').text()).toEqual('Access your decks and get playing');
    });

    it('should have an email input with placeholder text', () => {
        const component = mount(<Login />);
        expect(component.find('input#email').prop('placeholder')).toEqual('Email');
    });

    it('should have a password input with placeholder text', () => {
        const component = mount(<Login />);
        expect(component.find('input#password').prop('placeholder')).toEqual('Password');
    });
});
